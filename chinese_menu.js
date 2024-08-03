const searchicon1 = document.querySelector('#searchicon1');
const searchbaricon1 = document.querySelector('#searchbaricon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const searchbaricon2 = document.querySelector('#searchbaricon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const buttons = document.querySelector('.nav_bar');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    bar.style.opacity = 0;
    buttons.style.opacity = 0;

    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
    
    console.log("awoooooga");
})

cross.addEventListener('click', function(){
    setTimeout(()=>{
        bar.style.opacity = 1;
        buttons.style.opacity = 1;
    },200);


    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

//dropdown menu scripts
const menu_btn = document.querySelector('.menus_btn');
const dropdown = document.querySelector('.dropdown_menu');
const caret = document.querySelector('.fa-caret-down');

menu_btn.addEventListener('click', function() {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        caret.style.transform = 'translateY(-50%)';
    } else {
        dropdown.style.display = 'block';
        caret.style.transform = 'translateY(-50%) rotate(-180deg)';
    }
});


//scripts for image slideshow
var counter = 1
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000)