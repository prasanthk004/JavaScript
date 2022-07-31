var x=(function(){

    function getMobileNo(patt)
    {
        var intext=$("#tx").val();
 
        var res= patt.exec(intext);

      var out=[];



       while(res)
       {
            if(out.length>0)
            {
                out+="<br>";
            }
            out+=res;

            var res= patt.exec(intext);
       }
       $("#result").html("Numbers found <br><br>"+out);

        
    
    }


    function findPrasa(patt)
    {
        var intext;
        intext=$("#tx").val();

        var res=patt.test(intext);

        if(res)
        {
            $("#result").html("Prasa found");
        }
        else{
            $("#result").html("Prasa not found");

        }

        
    }

    return{
           getMobileNo:getMobileNo,
           findPrasa:findPrasa
    }

})();





$(

    function()
    {
        $("#num").click(function(){

            x.getMobileNo(/\d{10}/g);

        });

        $("#pr").click(function()
        {
         
            x.findPrasa(/prasa/ig);
        })

     }
);