function test(){
    var Array = [];
var size =document.getElementById("size").value;


for(var i=0; i<size; i++) {
	
	//Taking Input from user
	Array[i] = prompt('Enter Element ' + (i+1));
}
var sum=0;
for(var i=0; i<size;i++){
	sum+=(Array[i]*Array[i]);
}

alert(`sum of squares is ${sum}`)







}