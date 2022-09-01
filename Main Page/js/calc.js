/*
  place : 0) Brazil 1) Switzerland 2) Australia 3) UK 4) Bolivia 5) France 6) Germany 7) USA1(Disney Land) 8) USA2(Statue of Liberty)
*/
const adverb = wordList[0].word;
const object = wordList[1].word;
const adjective = wordList[2].word;
const animal = wordList[3].word;
const verb = wordList[4].word;

/* Map for the score calculation */
const placeArray = [ 'Brazil', 'Switzerland', 'Australia', 'UK', 'Bolivia', 'France', 'Germany', 'USA1', 'USA2' ];
let scoreArray = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let resultPlace;

const placeScoreMap = new Map();
placeScoreMap.set(placeArray[0], 
  { words: ['바삭바삭', '보들보들', '벽돌', '상자', '평화로운', '느린', '한가로운', '조용한', '앵무새', '고양이', '뒤집다', '날리다', '쓸다'] ,
  score: [ 5, 3, 5, 3, 4, 4, 4, 3, 5, 3, 3, 4, 4 ]} );

placeScoreMap.set(placeArray[1], 
  { words: ['바삭바삭', '말랑말랑', '푸릇푸릇', '몽글몽글', '나무', '창문', '구름', '평화로운', '느린', '한가로운', '조용한', '여유로운', '시원한', '백조', '산양', '바라보다', '만지다'],
  score: [ 3, 1, 3, 4, 4, 2, 4, 3, 3, 2, 3, 4, 4, 2, 3, 4, 1] } );

placeScoreMap.set(placeArray[2],
  { words: ['뚝딱뚝딱', '두근두근', '살랑살랑', '무지개', '시계', '과일', '시원한', '빠른', '특별한', '갈매기', '고양이', '듣다', '흩뿌리다' ],
  score: [ 5, 3, 4, 4, 3, 5, 4, 2, 4, 5, 2, 5, 4 ]} );

placeScoreMap.set(placeArray[3], 
  { words: ['뚝딱뚝딱', '두근두근', '무지개', '시계', '창문', '구름', '빠른', '여유로운', '고양이', '사자', '날리다', '돌리다'],
  score: [ 4, 5, 3, 4, 5, 5, 3, 5, 5, 2, 4, 5 ]} );

placeScoreMap.set(placeArray[4],
  { words: ['바삭바삭', '보들보들', '반짝반짝', '물방울', '눈물', '구름', '평화로운', '느린', '한가로운', '조용한', '놀란', '따뜻한', '플라밍고', '비추다', '흩뿌리다', '바라보다', '만지다' ],
  score: [ 2, 2, 5, 2, 4, 3, 3, 2, 3, 2, 2, 3, 5, 5, 2, 4, 1 ]}  );

placeScoreMap.set(placeArray[5],
  { words: ['뚝딱뚝딱', '두근두근', '살랑살랑', '반짝반짝', '벽돌', '놀란', '특별한', '수탉', '듣다', '비추다', '바라보다', '돌리다'],
  score: [ 3, 4, 5, 4, 5, 4, 4, 5, 3, 4, 5, 4 ]}  );

placeScoreMap.set(placeArray[6],
  { words: ['살랑살랑', '반짝반짝', '물방울', '창문', '눈물', '시원한', '여유로운', '백조', '다람쥐', '산양', '뒤집다', '돌리다' ],
  score: [ 5, 5, 5, 4, 4, 4, 4, 5, 3, 3, 5, 3 ]}  );

placeScoreMap.set(placeArray[7],
  { words: ['두근두근', '몽글몽글', '무지개', '시계', '평화로운', '느린', '놀란', '고양이', '플라밍고', '날리다', '듣다', '만지다' ],
  score: [ 5, 4, 5, 3, 5, 3, 4, 5, 3, 5, 4, 4] }  );

placeScoreMap.set(placeArray[8],
  { words: ['바삭바삭', '보들보들', '뚝딱뚝딱', '벽돌', '상자', '한가로운', '조용한', '특별한', '갈매기', '비추다', '바라보다', '만지다' ],
  score: [ 3, 4, 5, 4, 5, 5, 4, 3, 5, 3, 5, 4 ]}  );


function scoreCalculation() {
  placeScoreMap.forEach( (Element, index)=> {
    const e = Element;
    const placeIndex = index;
    wordChoice.forEach( (Element)=> {
      const word = Element;
      e.words.forEach( (Element, index)=> {
        if (word == Element) 
          scoreArray[placeArray.indexOf(placeIndex)] += e.score[index]; 
      });  
    });
  });
  resultPlace = placeArray[scoreArray.indexOf(Math.max.apply(Math, scoreArray))];
  console.log(placeArray[scoreArray.indexOf(Math.max.apply(Math, scoreArray))]);
}
