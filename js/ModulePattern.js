var Employee=(function()
    {

        var name,age,salary;
        function init(Name,Age)
        {
            name=Name;
            age=Age;
            salary=age*50;

        }
        function display()
        {
            document.write(name+" |"+age+" |"+salary);
        }
        return{
            Init:init,Display:display
        };
    

        
    })();
 


     
    
    