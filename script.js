function fadeTo(nextScene){

const fade=document.getElementById("fade");

fade.classList.add("show");

setTimeout(()=>{
nextScene();
fade.classList.remove("show");
},500);

}
