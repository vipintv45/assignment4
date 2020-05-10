function test(){
    var Array = [];
var size =document.getElementById("size").value;


for(var i=0; i<size; i++) {
	
	//Taking Input from user
	Array[i] = prompt('Enter Element ' + (i+1));
}
var n=1;
var fnum;
for(var j=0;j<size;j++)
    {
                var m=1;
                for(var k=j+1;k<size;k++)
                    { 
                        if(Array[j]==Array[k])
                            {
                                m++;
                            }
                    }
                   
                if(m>n)
                {
                    fnum= Array[j];
                    n=m;
                }
                
    
    }
    if (typeof fnum === 'undefined') {
        alert("No element is repeating")
      }
   else{
      alert(`The most frequent element in the array is ${fnum}`);
        }
}