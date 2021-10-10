# 4단계 while문
<br>

## 10952번 A + B - 5
### 문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
### 입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. <br>
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)<br>
입력의 마지막에는 0 두 개가 들어온다.
### 출력
각 테스트 케이스마다 A+B를 출력한다.

### 풀이
```js
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let i = 0;
let answer = "";

while (i < input.length) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);

  if (a !== 0 || b !== 0) {
    answer += `${a + b}\n`;
  } else {
    break;
  }
  i++;
}
console.log(answer);
```
<br>

## 10951번 A + B - 4
### 문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
### 입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. <br>
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)<br>
입력의 마지막에는 0 두 개가 들어온다.
### 출력
각 테스트 케이스마다 A+B를 출력한다.

### 풀이
```js
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let i = 0;
let answer = "";

while (i < input.length) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  answer += `${a + b}\n`;
  i++;
}
console.log(answer);
```