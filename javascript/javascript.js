let mes2=document.getElementById("wrong1");
mes2.addEventListener("click",wrong1());
let m2=document.getElementById("w1");
m2.addEventListener("click",wrong1());

function wrong1(){
    document.getElementById("wrong1").style="background-color:red;";
    document.getElementById("w1").style="background-color:red;"; 
    for(let i=0;i<4;i++)
        if(i==0)
        {
            continue;
        }
        else
        {
            document.getElementsByClassName("o1")[i].style="background-color:white;";
            document.getElementsByClassName("s1")[i].style="background-color:#e06eac;";  
        }
}
let mes3=document.getElementById("wrong2");
mes3.addEventListener("click",wrong2());
let m3=document.getElementById("w2");
m3.addEventListener("click",wrong2());

function wrong2(){
    document.getElementById("wrong2").style="background-color:red;";
    document.getElementById("w2").style="background-color:red;";
    for(i=0;i<4;i++)
        if(i==1)
        {
            continue;
        }
        else
        {
            document.getElementsByClassName("o1")[i].style="background-color:white;";
            document.getElementsByClassName("s1")[i].style="background-color:#e06eac;";
        }
}
let mes4=document.getElementById("wrong3");
mes4.addEventListener("click",wrong3());
let m4=document.getElementById("w3");
m4.addEventListener("click",wrong3());

function wrong3(){
    document.getElementById("wrong3").style="background-color:red;";
    document.getElementById("w3").style="background-color:red;";
    for(i=0;i<4;i++)
        if(i==2)
        {
            continue;
        }
        else
        {
            document.getElementsByClassName("o1")[i].style="background-color:white;";
            document.getElementsByClassName("s1")[i].style="background-color:#e06eac;";
        }
}
let mes1=document.getElementById("answer");
mes1.addEventListener("click",ans());
let m1=document.getElementById("a1");
m1.addEventListener("click",ans());

function ans(){
    document.getElementById("answer").style="background-color:green;";
    document.getElementById("a1").style="background-color:green;";
    for(i=0;i<4;i++)
    {
        if(i==3)
        {
            continue;
        }
        else
        {
            document.getElementsByClassName("o1")[i].style="background-color:white;";
            document.getElementsByClassName("s1")[i].style="background-color:#e06eac;";
        }
    }

}
