var context;
window.onload = function () {
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
}
function Line(x0, y0, xn, yn, color) { 
var x00 = document.getElementById("x0"); 
var y00 = document.getElementById("y0"); 
var xnn = document.getElementById("xn"); 
var ynn = document.getElementById("yn"); 
if (color!=0) var collor = document.getElementById("color"); 



context.linewidth = 5; 
context.beginPath(); 
context.strokeStyle = collor.value; 
context.moveTo(x00.value, y00.value); 
context.lineTo(xnn.value, ynn.value); 
context.stroke(); 
}
<!--
function exe_fillRect(idx, idy, idw, idh, idc) {
    var x = document.getElementById(idx);
    var y = document.getElementById(idy);
    var w = document.getElementById(idw);
    var h = document.getElementById(idh);
    var c = document.getElementById(idc);
    context.fillStyle = c.value;
    context.fillRect(x.value, y.value, w.value, h.value);
}
function exe_strokeRect(idx, idy, idw, idh, idc) {
    var x = document.getElementById(idx);
    var y = document.getElementById(idy);
    var w = document.getElementById(idw);
    var h = document.getElementById(idh);
    var c = document.getElementById(idc);
    context.strokeStyle = c.value;
    context.strokeRect(x.value, y.value, w.value, h.value);
}
function exe_clear(idx, idy, idw, idh) {
    var x = document.getElementById(idx);
    var y = document.getElementById(idy);
    var w = document.getElementById(idw);
    var h = document.getElementById(idh);
    context.clearStyle = c.value;
}
function exe_line(idsx, idsy, idex, idey, idc) {
    var xs = document.getElementById(idsx);
    var ys = document.getElementById(idsy);
    var xe = document.getElementById(idex);
    var ye = document.getElementById(idey);
    var c = document.getElementById(idc);
    context.strokeStyle = c.value;
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(xs.value, ys.value);
    context.lineTo(xe.value, ye.value);
    context.stroke();
}
function exe_polyline(idlw, idlpc, idc) {
    var lw = document.getElementById(idlw);
    var c = document.getElementById(idc);
    var pc = document.getElementById(idlpc);
    var my = canvasH / Math.pow(canvasW, 2);
    var mx = canvasW / pc.value;
    var y = 0;
    context.beginPath();
    context.strokeStyle = c.value;
    context.lineWidth = lw.value;
    context.moveTo(0, 0);
    for (var x = 0; x <= pc.value; x++){
    y = Math.pow(x * mx, 2) * my;
    context.lineTo(x*mx, y);
    }
    context.stroke();
}
function exe_arc(idcx, idcy, idca, idcr, idcc) {
    var x = document.getElementById(idcx);
    var y = document.getElementById(idcy);
    var a = document.getElementById(idca);
    var r = document.getElementById(idcr);
    var c = document.getElementById(idcc);
    //console.log('exe_arc', x, y);
    context.beginPath();
    context.strokeStyle = c.value;
    context.arc(x.value, y.value, r.value, 0,
                degreesToRadians(a.value), true);
    context.stroke();
}
function exe_carc(idcx, idcy, idca, idcr, idcc) {
    var x = document.getElementById(idcx);
    var y = document.getElementById(idcy);
    var a = document.getElementById(idca);
    var r = document.getElementById(idcr);
    var c = document.getElementById(idcc);
    context.beginPath();
    context.fillStyle = c.value;
    context.arc(x.value, y.value, r.value, 0,
                degreesToRadians(a.value), true);
    context.closePath();
    context.fill();
}
function degreesToRadians(deg) {
         return deg * Math.PI / 180;
}
function exe_polygone(idgpc, idc) {
    var c = document.getElementById(idc);
    var pc = document.getElementById(idgpc);
    var x = 0;
    var y = 0;
    context.beginPath();
    context.fillStyle = c.value;
    context.moveTo(0, 0);
        //console.log('exe_polygone:pc', pc.value);
    for (var i = 0; i <= pc.value; i++) {
        x = getRandomInt(0, canvasW);
        y = getRandomInt(0, canvasH);
       // console.log('exe_polygone', x,y);
      context.lineTo(x,y);
    }
    context.closePath();
    context.fill();
}
function getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
}
function exe_txt(idtx, idty, idtw, idtt, idtd, idtc) {
    var x = document.getElementById(idtx);
    var y = document.getElementById(idty);
    var w = document.getElementById(idtw);
    var t = document.getElementById(idtt);
    var d = document.getElementById(idtd);
    var c = document.getElementById(idtc);
    context.textBaseline ="middle";
    context.textAlign = "left";
    context.font = "2.5em Times, serif";
    if (d.value == 'fill') {
    context.fillStyle = c.value;
    context.fillText(t.value, x.value, y.value, w.value);
   }
    else {
    context.strokeStyle = c.value;
    context.strokeText(t.value, x.value, y.value, w.value);
}
function exe_image(idix, idiy, idiw, idih, idif) {
    var x = document.getElementById(idix);
    var y = document.getElementById(idiy);
    var w = document.getElementById(idiw);
    var h = document.getElementById(idih);
    var f = document.getElementById(idif);
    var fn = f.files[0].name;
    var image = new Image(w.value, h.value);
    image.src = fn;
    context.drawImage(image, x.value, y.value, w.value, h.value);
}
-->