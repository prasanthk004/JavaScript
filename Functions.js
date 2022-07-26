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
    document.getElementById("btnTest").onclick=function()
    {
        alert("Thanks for clicking the button");
    };
};
