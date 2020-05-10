function test()

{
var letters = [];
letters =document.getElementById("size").value;


     
  
var newLetters = "";
for(var i = 0; i<letters.length; i++){
    if(letters[i] === letters[i].toLowerCase()){
        newLetters += letters[i].toUpperCase();
    }else {
        newLetters += letters[i].toLowerCase();
    }
}
alert(`The swapped text is ${newLetters}`);
console.log(`The swapped text is ${newLetters}`);
	

}