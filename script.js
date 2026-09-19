const navToggle=document.querySelector(".nav-toggle");
const navMenu=document.querySelector(".nav-menu");
navToggle?.addEventListener("click",()=>navMenu.classList.toggle("show"));
document.querySelectorAll(".nav-menu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("show")));

const progress=document.getElementById("progressBar");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max>0?(window.scrollY/max)*100:0)+"%";
});

document.querySelectorAll(".experience-head,.education-head").forEach(button=>{
  button.addEventListener("click",()=>{
    const item=button.parentElement;
    const wasOpen=item.classList.contains("open");
    const group=item.parentElement;
    group.querySelectorAll(".open").forEach(x=>{x.classList.remove("open");x.querySelector(".plus").textContent="+"});
    if(!wasOpen){item.classList.add("open");button.querySelector(".plus").textContent="−";}
  });
});
document.getElementById("year").textContent=new Date().getFullYear();
