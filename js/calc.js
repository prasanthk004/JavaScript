function add()
{
     let n1,n2,ans;
    n1=parseInt(document.getElementById("a").value);
    n2=parseInt(document.getElementById("b").value);
    ans=n1+n2;
    document.getElementById("ax").innerHTML=n1;
    document.getElementById("bx").innerHTML=n2;
    document.getElementById("sum").innerHTML=ans;
    alert(ans);

}git 