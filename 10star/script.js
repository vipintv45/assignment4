function run()
{
    var t="*******";
    var l=t.length;
    var text=""
    for(i=0;i<l;i++){
        for(j=0;j<i;j++){text+=t[j];}
        text+="<br>"
    }
    document.getElementById("result").innerHTML=text;

}