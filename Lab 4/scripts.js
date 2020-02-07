var artist = {"names":[], "abouts":[], "urls":[]};

function loadArtists() {
    let pastArtists = localStorage.getItem("artist");
    if(pastArtists != null) {
        artist = JSON.parse(pastArtists);
    }   
    console.log(JSON.stringify(artist));
    let list = document.getElementById("list");
    
    
    for(var i = 0; i < artist.names.length; i++) {
        let listItem = document.createElement("DIV");
        listItem.setAttribute("class", "listitem");

        let imgDiv = document.createElement("DIV");
        imgDiv.setAttribute("class", "image");
        let img = document.createElement("IMG");
        img.src = artist.urls[i];
        imgDiv.appendChild(img);

        let name = document.createElement("DIV");
        name.innerHTML = artist.names[i];
        name.setAttribute("class", "name");
        name.setAttribute("maxlength", "40");

        let desc = document.createElement("DIV");
        desc.innerHTML = artist.abouts[i];
        desc.setAttribute("class", "desc");
        desc.setAttribute("maxlength", "40");

        let info = document.createElement("DIV");
        info.setAttribute("class", "info");
        info.appendChild(name);
        info.appendChild(desc);

        
        let delDiv = document.createElement("DIV");
        let del = document.createElement("BUTTON");
        delDiv.setAttribute("id", "delDiv");
        del.innerHTML = "Delete";
        del.setAttribute("id", "delete");
        del.onclick = function() {deleteArtist(del)};
        delDiv.appendChild(del);

        listItem.appendChild(imgDiv);
        listItem.appendChild(info);
        listItem.appendChild(delDiv);
        list.appendChild(listItem);
    }
}

function toggleForm() {
    var div,display;
    div = document.getElementById('form');
    display = div.style.display;
    div.style.display = (display && display !== 'none') ? 'none' : 'block';
}

function searchArtist(event) {
    console.log("button works")
    let list = document.getElementById("list")
    let listItems = document.querySelectorAll("div.listitem");
    for(var x = 0; x < listItems.length; x++) {
        list.removeChild(listItems[x]);
    }
    let searchParam = document.getElementById("search").value;
    for(var i = 0; i < artist.names.length; i++) {
        if(artist.names[i].includes(searchParam)) {
            let listItem = document.createElement("DIV");
        listItem.setAttribute("class", "listitem");

        let imgDiv = document.createElement("DIV");
        imgDiv.setAttribute("class", "image");
        let img = document.createElement("IMG");
        img.src = artist.urls[i];
        imgDiv.appendChild(img);

        let name = document.createElement("DIV");
        name.innerHTML = artist.names[i];
        name.setAttribute("class", "name");
        name.setAttribute("maxlength", "40");

        let desc = document.createElement("DIV");
        desc.innerHTML = artist.abouts[i];
        desc.setAttribute("class", "desc");
        desc.setAttribute("maxlength", "40");

        let info = document.createElement("DIV");
        info.setAttribute("class", "info");
        info.appendChild(name);
        info.appendChild(desc);

        
        let delDiv = document.createElement("DIV");
        let del = document.createElement("BUTTON");
        delDiv.setAttribute("id", "delDiv");
        del.innerHTML = "Delete";
        del.setAttribute("id", "delete");
        del.onclick = function() {deleteArtist(del)};
        delDiv.appendChild(del);

        listItem.appendChild(imgDiv);
        listItem.appendChild(info);
        listItem.appendChild(delDiv);
        list.appendChild(listItem);
        }
    }

}

function addArtist(event) {

    let list = document.getElementById("list");
    let listItem = document.createElement("DIV");
    listItem.setAttribute("class", "listitem");
    let artistName = document.getElementById("artistName");
    let artistAbout = document.getElementById("artistAbout");
    let artistUrl = document.getElementById("artistUrl");

    let imgDiv = document.createElement("DIV");
    imgDiv.setAttribute("class", "image");
    let img = document.createElement("IMG");
    img.src = artistUrl.value;
    imgDiv.appendChild(img);

    let name = document.createElement("DIV");
    name.innerHTML = artistName.value;
    name.setAttribute("class", "name");
    name.setAttribute("maxlength", "40");
    
    let desc = document.createElement("DIV");
    desc.innerHTML = artistAbout.value;
    desc.setAttribute("class", "desc");
    desc.setAttribute("maxlength", "40");

    let info = document.createElement("DIV");
    info.setAttribute("class", "info");
    info.appendChild(name);
    info.appendChild(desc);

    let delDiv = document.createElement("DIV");
    let del = document.createElement("BUTTON");
    delDiv.setAttribute("id", "delDiv");
    del.innerHTML = "Delete";
    del.setAttribute("id", "delete");
    del.onclick = function() {deleteArtist(del)};
    delDiv.appendChild(del);

    listItem.appendChild(imgDiv);
    listItem.appendChild(info);
    listItem.appendChild(delDiv);
    list.appendChild(listItem);
    artistInfo = [artistName.value, artistAbout.value, artistUrl.value];
    artist.names.push(artistName.value);
    artist.abouts.push(artistAbout.value);
    artist.urls.push(artistUrl.value);
    localStorage.setItem("artist", JSON.stringify(artist));   
}

function deleteArtist(btn) {
    let list = document.getElementById("list");
    let listItems = document.querySelectorAll("div.listitem");
    
    for(var x = 0; x < listItems.length; x++) {
        console.log(listItems[x]);
        
        if(listItems[x] == btn.parentNode.parentNode) {
            artist.names.splice(x, 1);
            artist.abouts.splice(x, 1);
            artist.urls.splice(x, 1);
        }
    }
    localStorage.setItem("artist", JSON.stringify(artist));
    list.removeChild(btn.parentNode.parentNode);

}

window.onload=loadArtists();
