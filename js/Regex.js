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
       if(out.length>0)
       {
        $("#result").html("Numbers found <br><br>"+out);

       }
       else{
        $("#result").html("Numbers not found with starting 9");

       }

        
    
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

    function clear()
    {
        $("#tx").val("");
        $("#result").html("");


    }

    return{
           getMobileNo:getMobileNo,
           findPrasa:findPrasa,
           Clear:clear

    }

})();





$(

    function()
    {
        $("#num").click(function(){

            x.getMobileNo(/\9\d{9}/gm);

        });

        $("#pr").click(function()
        {
         
            x.findPrasa(/prasa/ig);
        })

        $("#clr").click(function()
        {
            x.Clear();

        }
        
        )


        

     }
);