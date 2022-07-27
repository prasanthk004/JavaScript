var Employee=window.Employee||{};
 

Employee.Array=(
    
    function(){

    function showList()
    {
        var a=[];   
    
    a[0]="Prasa";
    a[1]="Siva";
    a[2]=8.2551;
    a[3]=123;
    
    var res=[];
    res.push("<ul>")
    
    
    for(i=0;i<a.length;i++)
    {
        res.push("<li>"+a[i]+"</li>");
    }
    
    res.push("/<ul>");
    
    document.getElementById("list").innerHTML=res.join(" ");
    }
    
    function TestConcat()
    {
        var x=["kp","mp","xp"];
        var y=["rpd","mpd","xpd"];

        var z=x.concat(y);

        document.getElementById("conct").innerHTML=z.join(" ");
    }

    return{
        showList:showList ,
        TestConcat:TestConcat
    };



}

)();



