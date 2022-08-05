const main = document.querySelector('#main');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');
const result = document.querySelector('#result');
const pages = [ main, section1, section2, section3, section4, section5, result];
let wordChoice = [ "", "", "", "", "" ];

const beforeBtn = document.querySelectorAll('.beforeButton');
const nextBtn = document.querySelectorAll('.nextButton');

const btnColorList = [  // 9, 10, 10, 9, 9
  { color: ['#FFDB94','#FFCDC2','#FFD1A7','#E0945C','#D7A5FF','#ACE4EC','#FF906C','#BCEA83','#6AD1C5'] }, 
  { color: ['#34C700','#FFCDC2','#ACE4EC','#DAFAFF','#FFD894','#FF906C','#FFCDC2','#D7A5FF','#E0945C','#6AD1C5'] },
  { color: ['#FF906C','#FFD1A7','#FFDB94','#6AD1C5','#DAFAFF','#D7A5FF','#ACE4EC','#FFCDC2','#34C700','#E0945C'] },
  { color: ['#DAFAFF','#6AD1C5','#ACE4EC','#FF906C','#FFDB94','#FFD1A7','#D7A5FF','#E0945C','#FFCDC2'] },
  { color: ['#FFDB94','#34C700','#6AD1C5','#FFCDC2','#FFD1A7','#ACE4EC','#E0945C','#DAFAFF','#A7A5FF'] }
];

const wordList = [
  { word: ['반짝반짝', '몽글몽글', '보들보들', '바삭바삭', '말랑말랑', '뚝딱뚝딱', '두근두근', '살랑살랑', '푸릇푸릇'] },
  { word: ['나무', '무지개', '물방울', '구름', '시계', '벽돌', '과일', '창문', '상자', '눈물'] },
  { word: ['놀란', '따뜻한', '여유로운', '느린', '평화로운', '특별한', '시원한', '한가로운', '빠른', '조용한'] },
  { word: ['갈매기', '앵무새', '산양', '플라밍고', '사자', '수탉', '다람쥐', '고양이', '백조'] },
  { word: ['비추다', '뒤집다', '흩뿌리다', '바라보다', '만지다', '날리다', '쓸다', '듣다', '돌리다'] }
];

const wordColorMap = new Map();

for (let i = 0 ; i < wordList.length; i++) {
  for (let j = 0; j < wordList[i].word.length; j++)
    wordColorMap.set(wordList[i].word[j], btnColorList[i].color[j]);
}

addButtonColor();
addWordChoice();

/* if (pages[1].querySelectorAll('wordBox button')[0].addEventListener('click', ()=> {
  console.log("btn1 clicked!");
}
)) */

function addWordChoice() {
  for (let i = 1 ; i <= wordList.length ; i++) {
    const p = pages[i];
    const btn = p.querySelectorAll('.wordBox button');
    for (let j = 0; j < wordList[i-1].word.length ; j++) {
      btn[j].addEventListener('click', () => {
        wordChoice[i-1] = wordList[i-1].word[j];
        btn[j].style.backgroundColor = btnColorList[i-1].color[j];
        changeSentence();
        changeColorPalette();
        changeOtherButtonColor(btn[j]);
    });
    }
  }
}

function changeSentence() {
  /* 나중에 result 페이지 생기면 수정... */
    const s = document.querySelectorAll('.sentence');
    s[1].querySelector('p').innerHTML = wordChoice[0] + "한 ";  
    s[2].querySelector('p').innerHTML = wordChoice[0] + "한 " + wordChoice[1] + "을 ";
    if (window.innerWidth < 1024) {
      s[3].querySelector('p').innerHTML = wordChoice[0] + "한 " + wordChoice[1] + "을 " + wordChoice[2] + "<br>"; 
      s[4].querySelector('p').innerHTML = wordChoice[0] + "한 " + wordChoice[1] + "을 " + wordChoice[2] + "<br>" + wordChoice[3] + "가 "; 
      s[5].querySelector('p').innerHTML = wordChoice[0] + "한 " + wordChoice[1] + "을 " + wordChoice[2] + "<br>" + wordChoice[3] + "가 " + wordChoice[4] ;   
    }
    else {
      s[3].querySelector('p').innerHTML = wordChoice[0] + "한 " + wordChoice[1] + "을 " + wordChoice[2] + " "; 
      s[4].querySelector('p').innerHTML = wordChoice[0] + "한 " + wordChoice[1] + "을 " + wordChoice[2] + " " + wordChoice[3] + "가 "; 
      s[5].querySelector('p').innerHTML = wordChoice[0] + "한 " + wordChoice[1] + "을 " + wordChoice[2] + " " + wordChoice[3] + "가 " + wordChoice[4] ;   
    }
}

function changeColorPalette() {
  const p = document.querySelectorAll('.colorPalette');
  for (let i = 2; i <= 6 ; i++) { // section2, section3, section4, section5
    const colorBtn = p[i-1].querySelectorAll('button'); 
    for (let j = 0; j < i-1; j++) {
      colorBtn[j].style.background = wordColorMap.get(wordChoice[j]);
    }
  }
} 

function changeOtherButtonColor(b) {
  const btn = pages[page].querySelectorAll('.wordBox button');
  btn.forEach( Element => { 
    if (Element != b)
      Element.style.backgroundColor = '#ffffff'; 
    });
}

function makeButton() {

}

function addButtonColor() {
  for (let i = 0 ; i < btnColorList.length ; i++) {
    const btn = pages[i+1].querySelectorAll('.wordBox button');
    for (let j = 0 ; j < btnColorList[i].color.length ; j++) {
      btn[j].addEventListener('mouseover', () => {
        btn[j].style.backgroundColor = btnColorList[i].color[j];
      });
      btn[j].addEventListener('mouseleave', () => {
        if (btn[j].innerHTML.valueOf() != wordChoice[i])
          btn[j].style.backgroundColor = '#ffffff';
      });
    }
  }
}

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
    pages[page].style.display = "none";
    pages[page-1].style.display = "flex";
    page--;
  }, 100)
}

function goNextPage() {
  if (wordChoice[page-1] != "")
    setTimeout(() => {
    pages[page].style.display = "none";
    pages[page+1].style.display = "flex";
    page++;
  }, 100)
}

