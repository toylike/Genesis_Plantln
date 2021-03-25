// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";

$(function() {
  objectFitImages();
});

let burger_button = document.querySelector('.burger_button');


function checkDropMenu(media_check){

  if(media_check.matches){
    document.querySelector('.burger_menu').style.display = 'none';
    burger_button.addEventListener('click', dropMenu);
    burger_button.classList.remove('burger_button--active');
  }else{
    document.querySelector('.burger_menu').style.display = 'none';
  }
};

function dropMenu(){
  if(burger_button.classList.contains('burger_button--active')){
      document.querySelector('.burger_menu').style.display = 'none';
      burger_button.classList.remove('burger_button--active');
  }else{
      burger_button.classList.add('burger_button--active');
      document.querySelector('.burger_menu').style.display = 'block';
  }
};

let media_check = window.matchMedia("(max-width: 767px)");
checkDropMenu(media_check);
media_check.addListener(checkDropMenu);

let burger_links = document.querySelectorAll('.burger_link');

for(let burger_link of burger_links){
  burger_link.addEventListener('click',dropMenu)
};




let scroll_top = document.getElementById("scroll_top"); 
let s_button = document.querySelector('.b_scroll'); 

function handleButtonClick(e) { 
  e.preventDefault(); 
  scroll_top.scrollIntoView({
    block: "center", behavior: "smooth"}); 
} 
s_button.addEventListener('click', handleButtonClick);

