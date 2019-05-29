## VanillaJS TodoList

기술 스택 : HTML5, CSS3, ES6
browser support : CHROME, IE10+
라이브러리 : Font Awesome
---

### 알게된 개념

**toLocaleDateString & options**  

사용자 문화법에 맞는 시간표기법으로 시간을 리턴  

weekday : 주 표기 (3가지 값 존재)  
month : 월 표기 (5가지 값 존재)  
day : 일 표기 (2가지 값 존재)  

--- 

**insertAdjacentHTML 메서드**  

특정 위치에 node 추가  

beforebegin : 엘리먼트 앞에  
afterbegin : 엘리먼트 가장 첫번째 child    
beforeend : 엘리먼트 가장 마지막 child  
afterend : 엘리먼트 뒤에  
> [!NOTE]
> beforebegin , afterend position은 element의 부모가 존재해야 하고, node가 tree 안에 있어야 한다.

---

**${}**

템플릿 리터럴 내 표현식 삽입 시 사용

변수 : ${todo}  
연산 : ${2 * a + b}  

--- 

**toggle() 메서드**

사용법 : toggle(String [,force])  
element.ClassList.toggle();

클래스가 존재하면 지우고, false 반환  
클래스가 없으면 추가하고, true 반환

---

**localStorage.setItem()**  

로컬 스토리지 : HTML5에서 추가된 저장소이며, key,value 스토리지 형태이다.  
로컬 스토리지는 window.localStorage에 위치하며,  
값은 문자열, 불린, 숫자, null, undefined 등을 저장할 수 있지만, 모두 문자열로 변환된다.  
사용자가 지우지 않는 한 계속 브라우저에 남아있다. (**비밀번호같은 중요한 정보는 절대 사용X**)

저장 : localStorage.setItem(key, value)  
조회 : localStorage.getItem(key)   
삭제 : localStorage.removeItem(key)  
전체삭제 : localStorage.clear()  

---

**JSON.stringify() 메서드**

javascript값이나 객체를 JSON 문자열로 변환한다.

---

**JSON.parse() 메서드**

JSON 문자열 구문을 분석하고, 그 결과에서 javascript 값이나 객체를 생성한다.

---

**array.forEach() 메서드**

주어진 함수를 배열 요소 각각에 대해 실행

```javascript
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
---

**location.reload() 메서드**

새로고침 메서드이며, 기본값은 false 인자를 가지고 있다.
.reload(true) 선언 시, 캐시를 무시하고 현재 서버로부터 다시 새로고침힌다.

---