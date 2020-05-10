function test(){

var a="";



    for(var i=1;i<=15;i++)
    { 
        if(i%2==0){

          var t="even"

            a+=" The number " + i+" is "+t+"<br>"
            console.log(`The number ${i} is even`)
        
                  }
        else{
            var t="odd"

            a+=" The number " + i+" is "+t+"<br>" 

            
            console.log(`The number ${i} is odd`)}
    }
    document.getElementById("abc").innerHTML=a;
}