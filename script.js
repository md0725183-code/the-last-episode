function fadeTo(nextScene){

const fade=document.getElementById("fade");

fade.classList.add("show");

setTimeout(()=>{
nextScene();
fade.classList.remove("show");
},500);

}
function episode2Loading(){

document.querySelector(".container").innerHTML=`

<div style="
background:black;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
text-align:center;">

<h1 style="
color:#E50914;
font-size:52px;
letter-spacing:6px;">
NETFLIX
</h1>

<p style="
margin-top:20px;
font-size:22px;">
Loading Movie...
</p>

<div style="
width:240px;
height:8px;
background:#333;
margin-top:30px;
border-radius:20px;
overflow:hidden;">

<div id="loadingBar"
style="
width:0%;
height:100%;
background:#E50914;
transition:width 2.5s linear;">
</div>

</div>

</div>

`;

setTimeout(()=>{
document.getElementById("loadingBar").style.width="100%";
},100);

setTimeout(()=>{
episode2Scene1();
},2600);

}
