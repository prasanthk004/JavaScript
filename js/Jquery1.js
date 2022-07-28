var Employee={};

Employee.Jquery=


( function ()
    {
        function UpdatePara()
        {
           alert("UpdatePara")
           var intext;
       
           intext=$("#nam").val();
           $("#para").html(" Welcome MR."+intext);
       
        }

        return{
            UpdatePara:UpdatePara
        }
    }

)();


 
   
     

         
           
           
    
          
    
       
 




 $(
    function()
    {
 
        $("#sve").click(            
            function()
            {
 
                Employee.Jquery.UpdatePara();
            }
        );
     }
    
 );