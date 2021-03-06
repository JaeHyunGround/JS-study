document.write("<div>6장 변수와 대입 연산자</div>");

let name = "안재현";
document.write(`안녕하세요 ${name} 입니다`);


// 변수 : 항상 바뀌는 값, 값을 저장하는 공간!
// 상수 : 변하지않는 값
// 특수문자 : _ $, 숫자 , 문자 (단 숫자 시작 불가!)
// var , let, const
// const function 객체, 배열, 
// ==, ===
// 문자열 내 변수 작성 법

// 실습 : 1=2는 왜 틀렸는가 (증명)?
// => 1은 상수이기 때문에 값을 바꿀 수 없다. (값을 바꾸는 것은 변수만 가능)

// 실습 : var , let, const 차이
// => var은 재정의, 재선언 가능 (같은 변수 이름 사용 가능)
// => let는 재정의는 가능하지만 재선언 불가 (같은 변수 이름 사용 불가) 
// 재정의란 =>
// let a = 1 
// a = 10 
// => const는 재정의, 재선언 둘 다 불가

// 실습 : ==, ===로 '1' , 1의 비교

// 실습 : 위의 실습 결과를 문자열 내 변수 작성법으로 결과 출력
// => let name = "안재현"
// => document.write(`안녕하세요 ${name} 입니다.`); 백틱 사용!
// => "안녕하세요" + name + "입니다"

// 스타일 인라인 방식
// div, span 차이 
// 선택자 : 쓰는 이유 수 많은 동일 작업을 줄이기위해
// 선택자 종류 : 클래스 class (.) , id (#)
// 클래스는 그룹핑, id는 식별 보통 중복으로 사용하여 그룹핑 작업 후 식별작업으로 스타일함.
// 선택자 우선 순위 : id > class > tag