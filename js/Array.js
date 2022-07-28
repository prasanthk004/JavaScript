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
    a.push(new Date());
    
    var res=[];
    res.push("<ul>")
    

    debugger;
    
    for(i=0;i<a.length;i++)
    {
        res.push("<li>"+a[i]+"</li>");
        console.log(res.join(" "));
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


    function TestSlice()
    {
        
        var y=["rpd","mpd","xpd","kp","mp","xp"];

        var z=y.slice(2,6);

        document.getElementById("slice").innerHTML=z.join(" ");
    }
    function TestShifts()
    {

        var n=["prasa","rajesh","Mani"];
        var s=n.shift();
        alert(s);
        document.getElementById("shifts").innerHTML=n.join(" ")
        n.unshift("PrasanthKP");
        document.getElementById("unshifts").innerHTML=n.join(" ")

    }

    return{
        showList:showList ,
        TestConcat:TestConcat,
        TestSlice:TestSlice,
        TestShifts:TestShifts

    };



}

)();
