# 2단계 if문
<br>
<br>

## 1330번 두 수 비교하기
### 문제
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

### 풀이
```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

if (a < b) {
  return console.log("<");
} else if (a > b) {
  return console.log(">");
} else {
  return console.log("==");
}
```
<br>

## 9498번 시험 성적
### 문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

### 풀이
```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");
const score = input;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else if (score >= 60 && score <= 70) {
  console.log("D");
} else {
  console.log("F");
}

```
<br>
