function findLarge(){
    var n1 =parseInt(document.getElementById("num1").value);
    var n2 =parseInt(document.getElementById("num2").value);
   
    if(isNaN(n1) || isNaN(n2)){alert("Inputs should be valid numbers")}
    else{
        if(n1>n2){
           document.getElementById("result").innerHTML=`<h3>The larger number is</h3> <h2> ${n1}</h2> `
        }
        else if(n2>n1){
            document.getElementById("result").innerHTML=`<h3>The larger number is</h3><h2> ${n2}</h2>`

        }
        else{alert("Both are equal")}
    }
}