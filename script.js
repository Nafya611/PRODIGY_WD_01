let menu=document.getElementById('menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{  
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// typing text Code

const typed = new Typed(document.querySelector('.multiple-text'), {
      strings: ['Physical Fitness','Body Building', 'Cardio', 'Fat Loss', 'Weight Gain'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true
    });