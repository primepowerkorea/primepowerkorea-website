const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-menu');
if(menuButton&&nav){menuButton.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav-item.has-dropdown>a').forEach(link=>{link.addEventListener('click',e=>{if(window.innerWidth<=980){e.preventDefault();link.parentElement.classList.toggle('open');}})});
