# 2024-03-14 노마드 코더 바닐라 JS Chrome 앱 만들기

## day 1 - 24.03.14 

- HTML 태그인 `<Input>` 속성인 **required**를 다시 한번 깨달음  
(사용자가 값을 넣지 않으면 제출 할 수 없음)

- 웹의 event를 발생시켰을떄 자동으로 새로고침이 되는 것을 막는것을 배움  
(preventDefault)

- toggle을 사용하여 html태그를 숨기거나 나타나게 하는것을 배움  
(classList.toggle)

- string끼리 합치는 방법 `console.log('hello ${username}')` 을 배움
___
## day 2 - 24.03.15

- 파일들을 세분화 해서 관리하기 위해 js 폴더와 css 폴더를 각각 만들었음  
 
- 브라우저가 사용자의 입력 정보를 기억하는(저장) **LocalStorage**를 배움  
```
// 저장할 키값과 값을 저장함
localStorage.setItem("key" , "value");

// 저장되어 있는 값을 키 값을 통해 불러옴
localStorage.getItem("key");

// 저장되어 있는 값을 키 값을 통해 제거함
localStorage.removeItem("key");

```

- JS 코딩시에 반복되는 string이 있다면 실수를 방지 하기 위해 대문자 변수로 저장해주는것이 좋다.
  > ex) `const USERNAME_KEY = "username"; `

- 사용자의 이름을 브라우저가 처음으로 받는 상황이라면(local storage가 null 일때)  
사용자 이름을 받기 위해 HTML에 있는 `<form>` 태그에 **hidden** class 명을 제거해서 보이게 하고  
만약 **local storage** 즉 <u>*username*</u>이 있다면 `<form>` 태그를 숨기기 위해 **hidden** class 명을 태그안에 넣어준다  
  > `loginForm.classList.add(HIDDEN_CLASSNAME);` 
- `<h1>` 태그인 greeting을 보여주기 위해 class 이름 **hidden**을 삭제한다  
  > `loginForm.classList.remove(HIDDEN_CLASSNAME);`
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

___
## day 3 - 24.03.18

- padStart(n,"x") 함수를 배움   
  => string이 가져야 할 길이가 n 인데 그렇지 않다면 앞쪽에 "x"를 n 길이가 되는 만큼 붙이는 함수 

- js에 있는 Math모듈에서 여러가지 함수를 배움

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

- js에서 HTML(img태그)를 생성하고 값(src)를 넣어주는 방법을 배움   

```
// bgImge에 img태그를 생성
const bgImge = document.createElement("img");

// 이미지 위치 (src)를 넣어주기
bgImage.src = `img/~~~~~.jpg`;

// HTML에 태그를 생성하기
document.body.appendChild(bgImage);

```
___

## day 4 - 24.03.19 _ To Do List 만들기

_이전에 파일들을 다시 정리해서 깃허브에 업로드 함_   

### **todo.js**   
기능 : 사용자가 할 일을 입력하고 그 값을 보여주고 삭제하는 기능을 구현함   

`handleToDoSubmit(event)`   
>할 일을 사용자가 입력했을때 submit의 event를 중지하고 입력한 값을 저장하고   
input창의 value를 지우고 saveTodos()와 panitToDo()를 호출함

`paintToDo()`   
>입력한 값을 가지고 js가 HTML에 li 태그와 span 태그, button 태그 로 조합이 된 태그를 만듦   
버튼에 "click" 이벤트를 넣어서 클릭시에 deleteToDo()를 호출함

`deleteToDo(event)`
> 현재 있는 li를 삭제 하는 함수   
event.target의 정보를 가지고 어떤 li(todo항목)을 삭제하는지 알 수 있다.

 
`saveToDos`   
> localStorage에 입력된 값(ToDo)를 array로 저장하게함.

## day 5 - 24.03.20 _ To Do List 만들기 2   

- `forEach()`를 배움.   
 각각의 item(array)을 가지고 요소마다 함수를 실행시킴

- 애로우 함수를 배움.(간략하게 함수 선언)   
```
// ex)
parsedTodos.array.forEach((item) => console.log("ㅎㅇㅎㅇ",item));
```

### todos.js - 기능 추가  

기능 : 할 일을 완전히 (localStroge 까지) 삭제하는 기능을 구현함   

- 브라우저가 toDos목록을 가져와 보여주기 위해 localstorage에 저장되어 있는 array를 (String으로 저장 되어 있음) JSON.parse()를 통해서 array로 바꾸어 줌.  
- toDo를 추가할 때 덮어쓰기를 방지 하기 위해서 `const ToDos`를 `let ToDos`로 바꾸어 주고 todo를 생성할 때 array에 이어서 추가 되게 끔 `toDos = parsedTodos`를 추가함.   
- todo를 삭제 하기 위해서 todo(text)만 저장하지 않고 id (랜덤한 수)와 함께 objec로 저장함. 이로 인해 js가 어떤 todo를 삭제하는지 id로 식별이 가능해짐.

- `filter()` 함수를 배움   
array의 요소를 가지고 그만큼 ()안에 함수를 실행하고 그때마다 return 값이 true인 요소들만 다시 array를 만들어주는 함수임.   

## day 6 - 24.03.21 _ To Do List 만들기 3   

기능 : 유저의 위치 정보를 얻어서 날씨를 띄우는 기능을 구현함   

- 날씨 데이터 (API)를 가지고 `filter()` 함수를 사용하여 내 위치의 날씨 데이터를 띄움

`filter()`
> promise함수 이기 때문에 당장 일어나지 않고 시간이 걸린뒤에 일어남   
그래서 Then과 함께 사용함
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

## day 7 - 24.03.26 _ To Do List 디자인 하기 _ CSS   

<구글폰트를 사용해서 폰트를 바꿈>   
> greeting , bible   

<새로운 이미지 추가 및 배경이미지(img)의 테두리 여백을 없앰>   
>  `imges = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg"]`   
    부모인 **body**의 padding과 margin을 0으로줌 (자식에게도 영향이 감)

<텍스트를 중앙 정렬 해놓음>
>`position: absolute` , `transform: translate(-50%,-50%)`

## day 8 - 24.03.27 _ To Do List 디자인 하기 _ CSS   


<전체적인 위치 조정>
> 날씨 , 환영문구, 시간, 입력창, 말씀, todoList   

<구글 폰트를 사용해서 폰트를 바꿈>
> clock, weather   

<텍스트에 그림자를 넣어서 밝은 배경에서 잘 보이게 만듦>
> `  text-shadow: -1px -1px 0 black `   

<좀 더 자세한 날씨를 표기함>
> ° 표시 , Today weather , 위치와 날씨/온도 위치 조정   

<시간 표시 수정>
> 초 부분을 시간/분 보다 작게 만들고 따로 나눠 바뀔 때 마다 흔들리는 현상을 방지시킴 (possition:absolute)   
## day 9 - 24.03.29 _ To Do List 디자인 하기 _ CSS   

<초기화면(이름 입력 안했을 때) info를 만듦>   
> 기능 : blink , 이름 입력시에 사라짐

<구글 폰트를 사용해서 폰트를 바꿈>   
> info(`<h1>`)   

<이름 입력 부분에 애니메이션을 넣음>   
> `@keyframes bounce` (화살표가 좌우로 움직임)   

<입력창(todo,login) 디자인 함>
> 일자 bar 형태   

## day 10 - 24.04.01 _ To Do List 디자인 하기 _ CSS   

<구글 폰트를 사용해서 폰트를 바꿈>
> weather, greeting, todo   

<삭제 아이콘 및 삭제선 기능 _ input>   
> type = "checkbox" 사용, 체크박스에 체크가 되어있을 때 텍스트에 삭제선(text-decoration) 적용

<유저에게 안내하는 텍스트를 넣음>
> todolist가 없거나 첫 이름 입력하기 전에 "Please add something to do today" 라는 문구를 띄움   
반대로 todolist가 있으면 안내문구는 사라지게 함   


<해야할 일>   
1. 체크박스 체크한정보를 저장해서 다음에들어올때 적용 되는걸 해야함