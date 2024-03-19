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