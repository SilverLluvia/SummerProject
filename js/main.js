const main = document.querySelector('#main');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');
const pages = [ main, section1, section2, section3, section4, section5 ];
const beforeBtn = document.querySelectorAll('.beforeButton');
const nextBtn = document.querySelectorAll('.nextButton');

const btnColorList = [
  { color: ['#FFDB94','#FFCDC2','#FFD1A7','#E0945C','#D7A5FF','#ACE4EC','#FF906C','#BCEA83','#6AD1C5'] },
  { color: ['#34C700','#FFCDC2','#ACE4EC','#DAFAFF','#FFD894','#FF906C','#FFCDC2','#D7A5FF','#E0945C','#6AD1C5'] },
  { color: ['#FF906C','#FFD1A7','#FFDB94','#6AD1C5','#DAFAFF','#D7A5FF','#ACE4EC','#FFCDC2','#34C700','#E0945C'] },
  { color: ['#DAFAFF','#6AD1C5','#ACE4EC','#FF906C','#FFDB94','#FFD1A7','#D7A5FF','#E0945C','#FFCDC2'] },
  { color: ['#FFDB94','#34C700','#6AD1C5','#FFCDC2','#FFD1A7','#ACE4EC','#E0945C','#DAFAFF','#A7A5FF'] }
];

addButtonColor();

function addButtonColor() {
  for (let i = 0 ; i < btnColorList.length ; i++) {
    const btn = pages[i+1].querySelectorAll('.wordBox button');
    for (let j = 0 ; j < btnColorList[i].color.length ; j++) {
      // btn[j].addEventListener('mouseover', setColor(btn[j], btnColorList[i].color[j]));
      btn[j].addEventListener('click', () => {
        btn[j].style.backgroundColor = btnColorList[i].color[j];
      });
      btn[j].addEventListener('mouseover', () => {
        btn[j].style.backgroundColor = btnColorList[i].color[j];
      });
      btn[j].addEventListener('mouseout', () => {
        btn[j].style.backgroundColor = '#ffffff';
      });
    }
  }
}

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }

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
    section1.style.display = "flex";
    page = 1;
  }, 100)
}

function goBeforePage() {
  setTimeout(() => {
    if (page == 1) {
      pages[page].style.display = "none";
      pages[page-1].style.display = "flex";
    }
    else {
      pages[page].style.display = "none";
      pages[page-1].style.display = "flex";
    }
    page -= 1;
  }, 100)
}

function goNextPage() {
  setTimeout(() => {
    pages[page].style.display = "none";
    pages[page+1].style.display = "flex";
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

// function changeColorPalette() {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
// }

