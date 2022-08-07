var x=(function(){

    function getMobileNo(patt)
    {
        var intext=$("#tx").val();
 
        var res= patt.exec(intext);

      var out=[];

    //   out+=res;
    //   if(out.length>0)
    //   {
    //       out+="<br>";
    //   }
     
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
        $("#result").html("Numbers not found  ");

       }

        
    
    }

    function matchNum(patt)
    {

        var intext=$("#tx").val();
        var out ;
        var macthedArray=intext.match(patt)
        console.log(macthedArray)
        out=macthedArray.join("<br />")

        $("#result").html("");
    //    setTimeout(20000);
        if(out.length>0)
        {
         $("#result").html("Numbers found <br><br>"+out);
 
        }
        else{
         $("#result").html("Numbers not found  ");
 
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

    function findM(patt)
    {
        var intext=$("#tx").val();
        var mArray=intext.match(patt) ; 
        var out=mArray.join("<br />")

        if(out.length>0||out!=null)
        {
         $("#result").html("M Words Found <br><br>"+out);
 
        }
        else{
         $("#result").html("M Words not found  ");
 
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
           matchNum:matchNum,
           findM:findM,
           Clear:clear

    }

})();





$(

    function()
    {
        $("#num").click(function(){

            x.getMobileNo(/\d{10}/g);

        });

        $("#numMatch").click(function(){

            x.matchNum (/\d{10}/g);

        });

        $("#pr").click(function()
        {
         
            x.findPrasa(/prasa\s/gi);
        })

        $("#Mw").click(function(){

            x.findM(/\s[a-z]*am[a-z]*/gmi);

        })

        $("#clr").click(function()
        {
            x.Clear();

        }
        
        )


        

     }
);