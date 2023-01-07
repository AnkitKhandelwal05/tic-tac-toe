var count=0;
var b;
var c;
function name(){
 b= prompt("ENTER NAME OF 1st player");
 c= prompt("ENTER NAME OF 2nd player");
document.getElementById(1).innerText= b.toUpperCase();
document.getElementById(2).innerText= c.toUpperCase();
document.getElementById("star").style.width = "0";
}
function cl(a){
    count++;
    console.log(count)
    if (count%2==0) {
        document.getElementById(a).innerText= "X";
        document.getElementById(a).value= 1;
    console.log("X");
        
    } else {
        document.getElementById(a).innerText= "O";
        document.getElementById(a).value= 0;
        console.log("0")
    }
    if (count>=5) {
        win();
    }
    //document.getElementById("win").innerText=document.getElementById(a).value
}
function win(){
    if (
    document.getElementById(11).value+document.getElementById(12).value+document.getElementById(13).value==0||
    document.getElementById(21).value+document.getElementById(22).value+document.getElementById(23).value==0||
    document.getElementById(31).value+document.getElementById(32).value+document.getElementById(33).value==0||
    document.getElementById(11).value+document.getElementById(21).value+document.getElementById(31).value==0||
    document.getElementById(12).value+document.getElementById(22).value+document.getElementById(32).value==0||
    document.getElementById(13).value+document.getElementById(23).value+document.getElementById(33).value==0||
    document.getElementById(11).value+document.getElementById(22).value+document.getElementById(33).value==0||
    document.getElementById(13).value+document.getElementById(22).value+document.getElementById(31).value==0) {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("win").innerText= b + " Won"
    }
    else if(
    document.getElementById(21).value+document.getElementById(22).value+document.getElementById(23).value==3||
    document.getElementById(31).value+document.getElementById(32).value+document.getElementById(33).value==3||
    document.getElementById(11).value+document.getElementById(12).value+document.getElementById(13).value==3||
    document.getElementById(11).value+document.getElementById(21).value+document.getElementById(31).value==3||
    document.getElementById(12).value+document.getElementById(22).value+document.getElementById(32).value==3||
    document.getElementById(13).value+document.getElementById(23).value+document.getElementById(33).value==3||
    document.getElementById(11).value+document.getElementById(22).value+document.getElementById(33).value==3||
    document.getElementById(13).value+document.getElementById(22).value+document.getElementById(31).value==3){
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("win").innerText= c + " Won"
    }
    else{
        if (count>=9) {document.getElementById("myNav").style.width = "100%"; 
        document.getElementById("win").innerText="DRAW!!!"
            
        }
        
    }

}