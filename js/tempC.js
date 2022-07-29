var temp=(
function()
{
    function tempCalc()
    {
        var from , to , fheit;
        var res=[];

        from=$("#from").val();
        to=$("#to").val();
      
        res.push("<table id=myTable >");
        res.push("<caption> Temprature Conversion Chart</caption>");
        res.push("<thead><tr><th width=&quot200px&quot >Celcius</th><th width=&quot200px&quot>Faherenheit</th></tr></thead>");
        for(let i=from;i<=to;i++)
        {
            fheit=(i*9/5)+32;
            res.push("<tr>")
            res.push("<td>"+i+"</td>")
            res.push("<td>"+fheit+"</td>")
            res.push("</tr>");
         }
        res.push("</table>")
        $("#result").html(res.join(" "));
     }

    return{
        tempCalc:tempCalc
    };

}

)();


$(

    function()
    {
        
        $("#calc").click(
            function() {

                temp.tempCalc();
                
            }
        )
    }
);