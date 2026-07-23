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
function episode2Intro(){

document.querySelector(".container").innerHTML=`

<div style="
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
background:black;
text-align:center;
padding:25px;
animation:fadeIn 1.5s;">

<div style="
color:#E50914;
font-size:18px;
letter-spacing:4px;
margin-bottom:25px;">
NETFLIX PRESENTS
</div>

<h1 style="
font-size:42px;
color:white;
margin-bottom:20px;">
THE LAST EPISODE
</h1>

<h2 style="
color:#E50914;
margin-bottom:10px;">
Episode 2
</h2>

<p style="
font-size:24px;
color:#ddd;
margin-bottom:40px;">
❤️ The Beauty I Fell In Love With
</p>

<button onclick="episode2Loading()"
style="
width:220px;
padding:15px;
font-size:20px;
background:#E50914;
border:none;
border-radius:12px;
color:white;">
▶ Start Movie
</button>

</div>

`;

}
