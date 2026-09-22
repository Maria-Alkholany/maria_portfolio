document.getElementById("playBtn").addEventListener("click",roleDice);

function roleDice(){
var randomNumber1= Math.floor(Math.random()*6)+1;
var randonImg1="./images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",randonImg1);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randonImg2="./images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",randonImg2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="PLayer1 & Player2 are Equal!🎉🎉";
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="PLayer1🎉 is the winner!";
}
else{
    document.querySelector("h1").textContent="PLayer2🎉 is the winner!";
}
}