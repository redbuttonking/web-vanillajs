const bibleVerse = [

  {
    verse : "나의 영혼이 잠잠히 하나님만 바람이여 나의 구원이 그에게서 나오는도다",
    address : "시편 62편 1절",

  },
  {
    verse : "보라 하나님은 나의 구원이시라 내가 신뢰하고 두려움이 없으리니 주 여호오는 나의 힘이시며 나의 노래시며 나의 구원이심이라" ,
    address : "이사야 12장 2절",

  },
  {
    verse : "이와 같이 그리스도도 많은 사람의 죄를 담당하시려고 단번에 드리신 바 되셨고 구원에 이르게 하기 위하여 죄와 상관 없이 자기를 바라는 자들에게 두 번째 나타나시리라" ,
    address : "히브리서 9장 28절",

  },
  {
    verse : "심령이 가난한 자는 복이 있나니 천국이 그들의 것임이요" ,
    address : "마태복음 5장 3절",

  },
  {
    verse : "의에 주리고 목마른 자는 복이 있나니 그들이 배부를 것임이요" ,
    address : "마태복음 5장 6절",

  },
  {
    verse : "볼지어다 내가 문 밖에 서서 두드리노니 누구든지 내 음성을 듣고 문을 열면 내가 그에게로 들어가 그와 더불어 먹고 그는 나와 더불어 먹으리라" ,
    address : "요한계시록 3장 20절",

  },
  {
    verse : "보라 하나님은 나의 구원이시라 내가 신뢰하고 두려움이 없으리니 주 여호와는 나의 힘이시며 나의 노래시며 나의 구원이십이라" ,
    address : "이사야 12장 2절",

  },
  {
    verse : "예수께서 이르시되 오늘 구원이 이 집에 이르렀으니 이 사람도 아브라함의 자손임이로다 인자가 온 것은 잃어버린 자를 찾아 구원하려 함이니라" ,
    address : "누가복음 19장 9-10절",

  },
  {
    verse : "네가 만일 네 입으로 예수를 주로 시인하며 네 마음으로 하나님이 그를 죽은 자 가운데서 살리신 것을 믿으면 구원을 받으리라" ,
    address : "로마서 10장 9절",

  },
  {
    verse : "모든 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니 오직 그리스도 예수안에 있는 그의 은혜로 말미암아 값없이 의롭다 하심을 얻으리라" ,
    address : "로마서 3장 23-24절",

  },
];


const verses = document.querySelector("#bible span:first-child");
const address = document.querySelector("#bible span:last-child");
const toDayBible = bibleVerse[Math.floor(Math.random()*bibleVerse.length)];

verses.innerText = `" ${toDayBible.verse} "`;
address.innerText = toDayBible.address;
