function toggleForm(event) {
    var list = document.getElementById("form");
    if(list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
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

}

function deleteArtist(btn) {
    let list = document.getElementById("list");
    list.removeChild(btn.parentNode.parentNode);
}
