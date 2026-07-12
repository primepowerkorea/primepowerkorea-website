const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.nav-menu');
if(btn&&menu){btn.addEventListener('click',()=>menu.classList.toggle('open'));}
