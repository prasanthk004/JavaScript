var x={};
x.name="Prasa";
x.age=25;

x.toString=function(){
    return this.name +" "+this.age;
};

document.write(x.toString());

var o = new Object();
o.size=25;
o.height=50;

var y={

    EmpId:2,
    sal:25000,
     "class":"A",

   toString:function(){
 
    return this.EmpId+" "+this.sal+" "+this.class;
}


};

 alert(x.toString());
 alert(y.toString());
 