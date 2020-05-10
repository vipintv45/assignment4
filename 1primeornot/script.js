function test(){
    var Array = [];
var size =document.getElementById("size").value;


for(var i=0; i<size; i++) {
	
	//Taking Input from user
	Array[i] = prompt('Enter Element ' + (i+1));
}
var x= Array[0];
var p=0;

if(isNaN(x) || x==""){alert("first element should be a valid number")}
          else{
                        if(x==0 || x==1){alert("zero and one are not prime")}
                        else{
                            if(x==2){alert(`The number ${x} is prime`)}
                            else{
                                
                                        for(var y=2; y<=x/2 ;y++)
                                        {
                                        
                                            if(x%y==0)
                                            {
                                                alert(`The number ${x} is not prime`);
                                                p=1;
                                                break;
                                            }
                                        
                                        
                                        }
                                            if(p==0){alert(`The number ${x} is prime`)}

                                }
                            }
                }
}
    
   
    
  