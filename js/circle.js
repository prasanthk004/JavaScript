var c=(
    function(){

        function CircleCalc()
        {
            var radius,area,circ;
           radius= parseFloat($("#r").val())
           area=3.14*radius*radius;
           circ=2*3.14*radius;
           $("#res").show();
           $("#res").html("Area of Circle : "+area);
           $("#cc").show();
           $("#cc").html("Circumferance :"+circ.t);
        }

        return{
            CircleCalc:CircleCalc
        }
    }
)();


$(

    function()
    {
        
        $("#Calc").click(
            function() {
                c.CircleCalc();
                
            }
        )
    }
);

