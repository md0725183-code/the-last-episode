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
function episode2Scene1(){

document.querySelector(".container").innerHTML=`

<div class="movieScene" style="background:black;min-height:100vh;color:white;text-align:center;padding:20px;">

<img src="photo11.jpg" class="moviePhoto">
<div style="width:100%;max-width:420px;margin:20px auto 30px auto;">

<div style="
height:8px;
background:#333;
border-radius:20px;
overflow:hidden;">

<div style="
width:15%;
height:100%;
background:#E50914;">
</div>

</div>

<p style="
margin-top:8px;
color:#aaa;
font-size:14px;">
Scene 1 of 7
</p>

</div>

<h1 style="margin-top:25px;color:#E50914;">
👀 Your Eyes
</h1>

<p style="font-size:20px;line-height:1.8;margin-top:20px;">
The first thing that stole my heart wasn't your words...
<br><br>
It was your beautiful eyes.
<br><br>
Every time I look into them,
I find peace, comfort and a reason to fall in love with you again.
❤️
</p>

<div class="movieControls">

<button onclick="episode2Scene2()"
style="padding:15px 30px;
background:#E50914;
color:white;
border:none;
border-radius:10px;
font-size:18px;">
▶ Next Scene
</button>

</div>

</div>

`;

}
function episode2Scene2(){

document.querySelector(".container").innerHTML=`

<div class="movieScene" style="background:black;min-height:100vh;color:white;text-align:center;padding:20px;">

<img src="photo6.jpg" class="moviePhoto">
<div style="width:100%;max-width:420px;margin:20px auto 30px auto;">

<div style="height:8px;background:#333;border-radius:20px;overflow:hidden;">

<div style="width:30%;height:100%;background:#E50914;"></div>

</div>

<p style="margin-top:8px;color:#aaa;font-size:14px;">
Scene 2 of 7
</p>

</div>

<h1 style="margin-top:25px;color:#E50914;">
😊 Your Smile
</h1>

<p style="font-size:20px;line-height:1.8;margin-top:20px;">
Your smile has a magic
that makes every difficult day feel beautiful.
<br><br>
Whenever you smile,
my heart forgets every worry.
<br><br>
Your smile is my favourite place.
❤️
</p>

<div class="movieControls">

<button onclick="episode2Scene1()"
style="padding:12px 22px;background:#444;color:white;border:none;border-radius:10px;margin-right:10px;">
⬅ Previous
</button>

<button onclick="episode2Scene3()"
style="padding:12px 22px;background:#E50914;color:white;border:none;border-radius:10px;">
Next Scene ➜
</button>

</div>

</div>

`;

}
function episode2Scene3(){

document.querySelector(".container").innerHTML=`

<div class="movieScene" style="background:black;min-height:100vh;color:white;text-align:center;padding:20px;">

<img src="photo1.jpg" class="moviePhoto">
<div style="width:100%;max-width:420px;margin:20px auto 30px auto;">

<div style="
height:8px;
background:#333;
border-radius:20px;
overflow:hidden;">

<div style="
width:45%;
height:100%;
background:#E50914;">
</div>

</div>

<p style="
margin-top:8px;
color:#aaa;
font-size:14px;">
Scene 3 of 7
</p>

</div>

<h1 style="margin-top:25px;color:#E50914;">
✨ Your Elegance
</h1>

<p style="font-size:20px;line-height:1.8;margin-top:20px;">
It isn't just your beauty...
<br><br>
It's the way you carry yourself,
your grace,
your kindness,
and the confidence in every step.
<br><br>
You don't just look beautiful...
you make every moment beautiful.
❤️
</p>

<div class="movieControls">

<button onclick="episode2Scene2()"
style="padding:12px 22px;background:#444;color:white;border:none;border-radius:10px;margin-right:10px;">
⬅ Previous
</button>

<button onclick="episode2Scene4()"
style="padding:12px 22px;background:#E50914;color:white;border:none;border-radius:10px;">
Next Scene ➜
</button>

</div>

</div>

`;

}
