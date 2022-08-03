window.onload=function()
{

    var d=new Date();
    alert(d.getMilliseconds());
var para=document.createElement("p");
var node=document.createTextNode("Hi This is New");
console.log(node);
para.appendChild(node);
console.log(para);
var e=document.getElementById("div1").appendChild(para)

var pg=document.createElement("span");
n=document.createTextNode("Document");

pg.appendChild(n);
document.getElementById("p2").appendChild(pg);
var cx=document.getElementById("p2");
document.getElementById("div1").removeChild(cx);
    
}