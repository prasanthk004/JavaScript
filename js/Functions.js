function hw()
{
    document.write(" <br> Hello World! From Function");
} 


var x=function()
{
    document.write("<br> Test x");
};

window.onload=function()
{

    var loadTime=new Date;
    document.getElementById("btnTest").onclick=function()
    {
        var clickTime=new Date;
        alert("Thanks for clicking the button loaded time"+loadTime+" clicked time"+clickTime);
    };
};
