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

        var c=document.createTextNode("prasa found");
        $("#result").html("<br>" );

         document.getElementById("result").appendChild(c);
            
        }
        else{
            var c=document.createTextNode("prasa not found");
            $("#result").html("<br>" );
    
             document.getElementById("result").appendChild(c);

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

            x.getMobileNo(/\9\d{9}/g);

        });

        $("#pr").click(function()
        {
         
            x.findPrasa(/prasa/ig);
        })
        

     }
);