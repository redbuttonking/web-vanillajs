# 노마드 코더 바닐라 JS Chrome

### 👉 [link](https://redbuttonking.github.io/web-vanillajs/)

# 프로젝트 기능 설명   

 ### 1. todo.js

> `saveToDos()`

- 로컬 스토리지에 현재 todolist를 저장함 (삭제 or 수정)

> `deleteToDo()`

- todolist를 삭제 함 (이후 saveToDos를 호출해서 현재 toDos를 저장함)

> `paintToDo()`

- 현재 로컬스토리지에 저장되어있는 todolist를 받아서 HTML에 추가함   
  (li 안에 : 체크박스, span, i)

> `handleToDoSubmit()`

- 입력받은 데이터(todolist)를 toDos에 push 해줌   
=> **paintToDo()** 를 호출하여 입력받은 todolist를 보여줌   
=> js에서 데이터(todolist)를 submit 하기 전에 **preventDefault()** 를 통해 이벤트를 중단시킴_submit

>`showPlzAddTodo()` / `removePlzAddTodo()`
- plz-addTodo라는 id, html 태그(h2)에 class명을 추가하거나 제거함 ('hidden')

> `checkTodo()`
- 현재 todolist가 있는지 확인 하고 조건에 맞게 안내문구를 보여줌    
=> * todolist가 없을떄, 사용자가 로그인을 하지 않았을 때

> `updateTodoState()`
- 각 todolist에 있는 체크박스가 체크되어 있으면 취소선을 아니라면 원래스타일로 바꾸어 줌

- 체크박스가 클릭 되었을때 todolist들의 id를 확인해서 해당(event대상) todolist의 ischecked의 값을 true or false로 바꾸어 줌

---

### 2. weather.js

> `onGeoOk()`
- 사용자의 위치를 받아 openAPI(날씨)를 가지고 현재 위치의 날씨를 표현함   
=> openweathermap에서 데이터를 받음 (url)   
=> 날씨, 아이콘, 지역(도시)를 가져와서 html로 보냄(innerText , src)

> `onGeoError()`
- 사용자의 위치를 받을 수 없다면(알 수 없다면) 경고창을 띄움   
=> navigator는 사용자 에이전트의 상태와 신원 정보를 나타냄   

> 💡 `Navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)`
- getCurrentPosition()는 위치를 알 때(참) onGeoOk를 실행하고 위치를 모를 때(거짓) onGeoError를 실행함

---

### 3. greeting.js

>`onLoginSubmit()`
- 숨겨져있는 login-form을 입력받은 이름을 가지고 보여준뒤 로컬 스토리지에 유저 이름을 저장함   
=> **(key : 'username' , value : username)**

>`paintGreetings()`
- id가 'greetingd'인 html 태그(h1)에 유저이름을 넣어줌(welcome)
- 이름을 입력하라는 *info*를 가려주고 todolist를 입력하라는 문구와 환영문구,   
  todoForm, todoList를 보여줌

---

### 4. background.js

- 랜덤 함수(Math.random)를 사용하여 저장 되어 있는 이미지를 랜덤으로 띄움

---

### 5. clock.js
> `getClock()`
- Date 객체를 가지고 시간(시,분,초)을 가져와 html에 넣어줌(innerText)   
=> **setInterval(getClock,1000)** 를 통해 1초마다 **getClock()** 함수를 호출해 시계를 보여줌   
(초가 오르는 것을 볼 수 있음) 

---

### 6. bible.js

- 배경화면과 마찬가지로 저장되어있는 말씀 구절을 가지고 랜덤 함수(Math.random)을 사용해   
새로고침 할 때 마다 랜덤으로 말씀 구절을 보이게 함

[👆맨위로👆](#노마드-코더-바닐라-js-chrome)

# 프로젝트 기록

<details> 

 <summary>자세히</summary>
   
## day 1 - 24.03.14 

> HTML 태그인 `<Input>` 속성인 **required**를 다시 한번 알게됨  

사용자가 값을 넣지 않으면 제출 할 수 없음

> preventDefault()
 
웹의 event를 발생시켰을떄 자동으로 새로고침이 되는 것을 막는것을 배움  

> classList.toggle

toggle을 사용하여 html태그를 숨기거나 나타나게 하는것을 배움  


> string끼리 합치는 방법 `console.log('hello ${username}')` 을 배움

## day 2 - 24.03.15

> 파일들을 세분화 해서 관리하기 위해 js 폴더와 css 폴더를 각각 만들었음  
 
> 브라우저가 사용자의 입력 정보를 기억하는(저장) **LocalStorage**를 배움  
```
// 저장할 키값과 값을 저장함
localStorage.setItem("key" , "value");

// 저장되어 있는 값을 키 값을 통해 불러옴
localStorage.getItem("key");

// 저장되어 있는 값을 키 값을 통해 제거함
localStorage.removeItem("key");

```

- JS 코딩시에 반복되는 string이 있다면 실수를 방지 하기 위해 대문자 변수로 저장해주는것이 좋다.    
ex) `const USERNAME_KEY = "username"; `


- 사용자의 이름을 브라우저가 처음으로 받는 상황이라면(local storage가 null 일때) 사용자 이름을 받기 위해 HTML에 있는 `<form>` 태그에 **hidden** class 명을 제거해서 보이게 하고 만약 **local storage** 즉 <u>*username*</u>이 있다면 `<form>` 태그를 숨기기 위해 **hidden** class 명을 태그안에 넣어준다 `loginForm.classList.add(HIDDEN_CLASSNAME);` 

- `<h1>` 태그인 greeting을 보여주기 위해 class 이름 **hidden**을 삭제한다  
`loginForm.classList.remove(HIDDEN_CLASSNAME);`

- `setInterval()` 함수는 내가 원하는 함수를 원하는 시간 주기에 맞춰 반복 실행한다.


- `setTimeout()` 함수는 내가 원하는 시간이 지났을때 한번 실행하는 함수이다.


- js 에서 제공하는 **date** 객체를 사용해서 년,월,일,시간(시/분/초)을 알 수 있다.  
  ```
  // date라는 이름의 Date 객체 생성
  const date = new Date();

  date.getFullyear(); //년도
  date.getDay(); //요일 (숫자로 반환 _ 0:일요일~)
  date.getDate(); //일
  date.getMinutes(); //분
  date.getSeconds(); //초
  date.getMilliseconds(); //밀리초

  등등~~
  ``` 

## day 3 - 24.03.18

> padStart(n,"x") 함수를 배움   

string이 가져야 할 길이가 n 인데 그렇지 않다면 앞쪽에 "x"를 n 길이가 되는 만큼 붙이는 함수 

> js에 있는 Math모듈에서 여러가지 함수를 배움

```
// 랜덤으로 0~1사이 수를 제공함
Math.random();

// 소수점 밑에 수가 있다면 버림
Math.floor();

// 소수점 밑에 수가 있다면 올림
Math.ceil();

// 소수점 밑에 수를 반올림해줌
Math.round();


//사용한 기능 - 말씀을 랜덤으로 띄우기
bibleVerse[Math.floor(Math.random()*bibleVerse.length)];
```

> js에서 HTML(img태그)를 생성하고 값(src)를 넣어주는 방법을 배움   

```
// bgImge에 img태그를 생성
const bgImge = document.createElement("img");

// 이미지 위치 (src)를 넣어주기
bgImage.src = `img/~~~~~.jpg`;

// HTML에 태그를 생성하기
document.body.appendChild(bgImage);

```

## day 4 - 24.03.19 _ To Do List 만들기

_이전에 파일들을 다시 정리해서 깃허브에 업로드 함_   

기능 : 사용자가 할 일을 입력하고 그 값을 보여주고 삭제하는 기능을 구현함   

> `handleToDoSubmit(event)`   

할 일을 사용자가 입력했을때 submit의 event를 중지하고 입력한 값을 저장하고   
input창의 value를 지우고 saveTodos()와 panitToDo()를 호출함

> `paintToDo()`   

입력한 값을 가지고 js가 HTML에 li 태그와 span 태그, button 태그 로 조합이 된 태그를 만듦   
버튼에 "click" 이벤트를 넣어서 클릭시에 deleteToDo()를 호출함

> `deleteToDo(event)`

현재 있는 li를 삭제 하는 함수   
event.target의 정보를 가지고 어떤 li(todo항목)을 삭제하는지 알 수 있다.

 
> `saveToDos`   

localStorage에 입력된 값(ToDo)를 array로 저장하게함.

## day 5 - 24.03.20 _ To Do List 만들기 2   

> `forEach()`를 배움.   
 
각각의 item(array)을 가지고 요소마다 함수를 실행시킴

> 애로우 함수를 배움.(간략하게 함수 선언)   

```
// ex)
parsedTodos.array.forEach((item) => console.log("ㅎㅇㅎㅇ",item));
```

> **todos.js - 기능 추가**  

- 할 일을 완전히 (localStroge 까지) 삭제하는 기능을 구현함   

- 브라우저가 toDos목록을 가져와 보여주기 위해 localstorage에 저장되어 있는 array를 (String으로 저장 되어 있음) JSON.parse()를 통해서 array로 바꾸어 줌.  
- toDo를 추가할 때 덮어쓰기를 방지 하기 위해서 `const ToDos`를 `let ToDos`로 바꾸어 주고 todo를 생성할 때 array에 이어서 추가 되게 끔 `toDos = parsedTodos`를 추가함.   
- todo를 삭제 하기 위해서 todo(text)만 저장하지 않고 id (랜덤한 수)와 함께 objec로 저장함. 이로 인해 js가 어떤 todo를 삭제하는지 id로 식별이 가능해짐.

- `filter()` 함수를 배움   
array의 요소를 가지고 그만큼 ()안에 함수를 실행하고 그때마다 return 값이 true인 요소들만 다시 array를 만들어주는 함수임.   

## day 6 - 24.03.21 _ To Do List 만들기 3   

> 기능 : 유저의 위치 정보를 얻어서 날씨를 띄우는 기능을 구현함   

날씨 데이터 (API)를 가지고 `filter()` 함수를 사용하여 내 위치의 날씨 데이터를 띄움

> `filter()`

promise함수 이기 때문에 당장 일어나지 않고 시간이 걸린뒤에 일어남 그래서 Then과 함께 사용함
```
fetch(url)  // 1. url를 요청하고
  .then((response) => response.json())   // 2. response(응답)받고
  .then((data) =>{   // 3. 데이터를 얻는다 (HTML에 넣는것 까지)
    const weather = document.querySelector("#weather span:last-child");
    const city = document.querySelector("#weather span:first-child");
    weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    city.innerText = data.name;
  });
```

## day 7 - 24.03.26 _ To Do List 디자인 하기 _ CSS 1   

> 구글폰트를 사용해서 폰트를 바꿈 

greeting.css , bible.css   

> 새로운 이미지 추가 및 배경이미지(img)의 테두리 여백을 없앰

`imges = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg"]`   
    부모인 **body**의 padding과 margin을 0으로줌 (자식에게도 영향이 감)

> 텍스트를 중앙 정렬 해놓음

`position: absolute` , `transform: translate(-50%,-50%)`

## day 8 - 24.03.27 _ To Do List 디자인 하기 _ CSS 2   


> 전체적인 위치 조정

날씨 , 환영문구, 시간, 입력창, 말씀, todoList   

>구글 폰트를 사용해서 폰트를 바꿈

clock.css, weather.css

> 텍스트에 그림자를 넣어서 밝은 배경에서 잘 보이게 만듦

`  text-shadow: -1px -1px 0 black `   

> 좀 더 자세한 날씨를 표기함

° 표시 , Today weather , 위치와 날씨/온도 위치 조정   

> 시간 표시 수정

초 부분을 시간/분 보다 작게 만들고 따로 나눠 바뀔 때 마다 흔들리는 현상을 방지시킴 (`possition:absolute`)   


## day 9 - 24.03.29 _ To Do List 디자인 하기 _ CSS 3   

> 초기 화면(이름 입력 안했을 때) info를 만듦   

기능 : blink , 이름 입력시에 사라짐

> 구글 폰트를 사용해서 폰트를 바꿈

info => `<h1>`   

> 이름 입력 부분에 애니메이션을 넣음

`@keyframes bounce` (화살표가 좌우로 움직임)   

> 입력창(일자 bar 형태) 디자인 함

todo.css,login.css

## day 10 - 24.04.01 _ To Do List 디자인 하기 _ CSS 4   

> 구글 폰트를 사용해서 폰트를 바꿈

weather, greeting, todo   

> 삭제 아이콘 및 삭제선 기능 _ input

type = "checkbox" 사용, 체크박스에 체크가 되어있을 때 텍스트에 삭제선(text-decoration) 적용

> 유저에게 안내하는 텍스트를 넣음

todolist가 없거나 첫 이름 입력하기 전에 "Please add something to do today" 라는 문구를 띄움   
반대로 todolist가 있으면 안내문구는 사라지게 함   


**<다음에 해야할 일>**   
1. 체크박스 체크한정보를 저장해서 다음에 들어올때(새로고침) 적용 되는걸 해야함   

## day 11 - 24.04.02 _ To Do List 디자인 하기 _ CSS 5 / 기능 구현(checkbox)

> todolist 취소선 변경

css로 취소선을 적용 시켰는데 js에서 eventlistener로 적용하게끔 바꿈

```
// todolist의 현재 상태(체크박스)에 따라 css를 변경함
updateTodoState(event);

// css 삭제(취소선 부분)
#todo-list li input[type="checkbox"]:checked + span{
  text-decoration: line-through; 
  color: rgba(255, 255, 255,0.7);
  text-shadow: none;
}

```
> 네이버 , 유튜브 , 구글 링크 생성

a태그로 생성해 놓음

> ~~체크박스 상태 유지 (로컬스토리지에 저장)~~ _ 구현중

도대체.... 왜... 안되는것이야... 내가 모르는 것이 있나 왜 상태 업데이트가 안되고 저장도 안되고 불러오는것도 안되냐 이말이야!!!!!!

> 다음에 해야할 일

1 . 체크박스 기능 구현   
2 . ~~웹페이지 링크 디자인 구현~~

## day 12 - 24.04.03 _ To Do List 디자인 하기 _ CSS 6   

> 웹페이지로 가는 아이콘 생성

네이버, 유튜브, 구글 세 가지의 아이콘을 만들어서 상단쪽에 배치함   

> 로컬스토리지 ischecked 값 변경 _ 함수 기능 변경   

`updateTodoState()`를 ischecked의 값을 변경하는 함수로 바꿈   

> 다음에 해야할 일   

1.체크박스 디자인 구현 (체크박스 클릭시 삭제선 디자인 적용)   


## day 13 - 24.04.04 _ To Do List 디자인 하기 _ CSS 7   


> 드.디.어 checkbox 이벤트 완성.

choeckbox가 선택이 되면 `updateTodoState()`가 실행됨   
함수에서는 조건에 맞게 취소선을 나타내고 toDos의 ischecked의 값을 바꾸고   
다시 로컬 스토리지에 저장( `saveToDos()` )을 한다. 

   



## day 14 - 24.04.08 _ 프로젝트 마무리 단계

> 날씨 아이콘 생성   

**openweather** 에서 제공하는 icon을 가져와 날씨를 img로 표현함

> css 폴더화   

각 구성들 마다 하나의 css를 만들고 style.css에 import 하여 첨삭하기 쉽게 파일을 나눔
```
// style.css

@import "reset.css";
@import "variables.css";


/* components */
@import "components/login-form.css";
@import "components/clock.css";
@import "components/greeting.css";
@import "components/todo-form.css";
@import "components/todo-list.css";
@import "components/bible.css";
@import "components/weather.css";
@import "components/info.css";
@import "components/webpage.css";
```

[👆기록 처음으로👆](#프로젝트-기록)

</details>

