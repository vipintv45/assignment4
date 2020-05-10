function test(){
    var strin =document.getElementById("string").value;
    var length =document.getElementById("size").value;
    
    var l ="";
   if(length>strin.length){alert("The size should be less than the no of characters in string")}
  else{ 
    for(i=0;i<length;i++)
    {
      
        l+=strin[i];
    }
   
      }
      document.getElementById("result").innerHTML="<h3>"+"The truncated string is"+"</h3>"+"<br>"+"<h1>"+l+"</h1>"
}