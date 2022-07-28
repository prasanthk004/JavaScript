 

var x=
function()
{
function Calculate()
{
    let si,p,n,r;

    p=parseFloat($("#pr").val());
    n=parseFloat($("#nr").val());
    r=parseFloat($("#ir").val());
   
    si=p*n*(r/100);
    alert(si);
    $("#trInterest").show();

    $("#tdInterest").html(si);

 }

 return{}
}

 
 
    

 

$(

    function()
    {
       
        $("#calc").click(
            function()
            {
               x.Calculate()
             }
        );
    }
);