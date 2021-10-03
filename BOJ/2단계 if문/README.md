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
