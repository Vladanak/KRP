var ggmap;
var divid;
var BSTUcoords = { latitude: 53.8914, longitude: 27.5598 };
var currcoords = BSTUcoords;

function WriteMessage(iddiv,txt){
    var div = document.getElementById(iddiv);
    div.innerHTML = txt;
}

function GetMyLocation(iddiv) {
    WriteMessage(iddiv, "старт GetMyLocation");
    divid = iddiv;
    var options = { timeout: 90000, maximumage: 600000 };
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(displayLocation, errorHandler, options);
    else WriteMessage(iddiv, "локация не поддерживается");
    WriteMessage(iddiv, "Завершение геолокации");
}

function errorHandler(err) {
    if (err.code == 1) alert("Нет доступа");
    else if (err.code == 2) alert("Координаты не определены");
    else if (err.code == 3) alert("превышено время поиска");
    else alert("");
}

function displayLocation(position) {
    currcoords = position.coords;
    var latx = position.coords.latitude;
    var longx = position.coords.longitude;
    var acc = position.coords.accuracy;
    WriteMessage(divid, "Координаты: широта: " + latx.toFixed(4) + ", долгота: " + longx.toFixed(4) + ", точность: " + acc + " метров");
}

function showMap(iddiv, coords) {
    if (coords == null) coords = currcoords;
    var gglatlng = new google.maps.LatLng(coords.latitude, coords.longitude);
    var ggmapoption = { zoom: 10, center: gglatlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
    var div = document.getElementById(iddiv);
    ggmap = new google.maps.Map(div, ggmapoption);
    addMarker(gglatlng, "Вы здесь", ggmap);
}

function addMarker(latlng,title,map){
    if (map == null) map = ggmap;
    var optionsMarker = { position: latlng, map: map, title: title, clickable: true };
    var marker = new google.maps.Marker(optionsMarker);
}