function object(){
   var y;
   var arr=[];
 
    var names=[
         {name:document.getElementById("num1").value},
        {name:document.getElementById("num2").value},
         {name:document.getElementById("num3").value}
       
        ]
       
        for(y in names)
        {
       arr[y]=names[y].name;
        }
        document.getElementById("result").innerHTML=`Sorted array is <br> <br> <b> [${arr.sort()} ]`

    }