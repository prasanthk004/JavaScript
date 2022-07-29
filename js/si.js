 var x=(function(){

    function hello()
    {
        alert("Hello");
    }

    function SiCalculate()
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

    return{
        hello:hello,
        SiCalculate:SiCalculate
    }




 })();
 
 
 



 
 
 
    

 

$(

    function()
    {
 
        $("#calc").click(
            function()
            {
               

                x.SiCalculate();
              }
        );
    }
);