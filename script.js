
/* Button Logic */
const btn=document.getElementById("wishBtn");
let active=false;

function handleWish(){
  active=!active;
  btn.classList.toggle("active");
  btn.textContent=active?"Wishes Sent 🎉":"Send Festive Wishes";
  playBell();
  boostSnow();
  navigator.vibrate?.(100);
  document.getElementById("info").scrollIntoView({behavior:"smooth"});
}

/* Bell */
function playBell(){
  const b=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-christmas-bell-notification-2736.mp3");
  b.volume=.35;
  b.play();
}

/* Snow */
const canvas=document.getElementById("snow"),ctx=canvas.getContext("2d");
let w,h,flakes=[];
function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;}
addEventListener("resize",resize);resize();

function create(n=150){
  for(let i=0;i<n;i++)
    flakes.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*3+1,d:Math.random()+.5});
}
function boostSnow(){create(80);}
function draw(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="rgba(255,255,255,.85)";
  ctx.beginPath();
  flakes.forEach(f=>{
    ctx.moveTo(f.x,f.y);
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    f.y+=f.d;
    if(f.y>h){f.y=-10;f.x=Math.random()*w;}
  });
  ctx.fill();
  requestAnimationFrame(draw);
}
create();draw();

