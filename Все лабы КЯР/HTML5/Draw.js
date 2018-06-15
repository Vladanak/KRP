var context;
window.onload = function () {
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
}


function Clear() {
    context.clearRect(0, 0, 700, 500);
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


function Circle(xc, yc, angle, rad, colorc) {
    var x = document.getElementById("xc");
    var y = document.getElementById("yc");
    var a = document.getElementById("angle");
    var r = document.getElementById("rad");
    var c = document.getElementById("colorc");


    
    context.beginPath();
    context.strokeStyle = c.value;
    context.arc(x.value,y.value,r.value,0,Math.PI*a.value);
    context.stroke();
    
}


function Rectangle(xr,yr,w,h,colorr) {
    var x = document.getElementById("xr");
    var y = document.getElementById("yr");
    var wi = document.getElementById("w");
    var hei = document.getElementById("h");
    var c = document.getElementById("colorr");



    context.strokeStyle = c.value;
    context.strokeRect(x.value, y.value, wi.value, hei.value);
}
//375,250
function Rocket(color,colorr,colorc) {
    var cl = document.getElementById("color");
    var cr = document.getElementById("colorr");
    var cc = document.getElementById("colorc");
    ///////////////////////////////Крыша
    context.linewidth = 10;
    context.strokeStyle = cl.value;
    context.beginPath();
    context.moveTo(320, 60);
    context.lineTo(375, 0);
    context.lineTo(425, 60);
    context.stroke();
    context.fill();
    ////////////////////////////////////

    context.fillStyle = cr.value;
    context.fillRect(320, 60, 105, 300);
    ///////////////////////////////////

    context.beginPath();
    context.fillStyle = cc.value;
    context.arc(375, 100, 30, 0, Math.PI * 30);
    context.arc(375, 200, 30, 0, Math.PI * 30);
    context.arc(375, 300, 30, 0, Math.PI * 30);
    context.closePath();
    context.fill();

    ///////////////////////////////////////////////////

    context.moveTo(320, 360);
    context.lineTo(280, 410);
    context.lineTo(280, 480);
    context.lineTo(318, 410);
    context.lineTo(375, 360);

    context.lineTo(432, 410);
    context.lineTo(470, 480);
    context.lineTo(470, 410);
    context.lineTo(425, 360);
    context.stroke();


    
}

