const main = document.querySelector('#main');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');
const pages = [ main, section1, section2, section3, section4, section5 ];
const beforeBtn = document.querySelectorAll('.beforeButton');
const nextBtn = document.querySelectorAll('.nextButton');

var page = 0;

document.getElementById('startButton').addEventListener('click', start);
for (const button of beforeBtn) {
   button.addEventListener('click', goBeforePage);
}
for (const button of nextBtn) {
   button.addEventListener('click', goNextPage);
}

function start() {
  setTimeout(() => {    
    main.style.display = "none";
    section1.style.display = "inline-block";
    page = 1;
  }, 100)
}

function goBeforePage() {
  setTimeout(() => {    
    pages[page].style.display = "none";
    pages[page-1].style.display = "inline-block";
    page -= 1;
  }, 100)
}

function goNextPage() {
  setTimeout(() => {    
    pages[page].style.display = "none";
    pages[page+1].style.display = "inline-block";
    page += 1;
  }, 100)
}

function changeSentence() {
  switch(page) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: 
  }
}

function changeColorPalette() {
  
}