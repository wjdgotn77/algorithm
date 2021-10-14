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
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
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
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
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

<br>

## 1110번 더하기 사이클

### 문제

0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 다음 예를 보자.<br>
26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.<br>
위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.<br>
N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.<br>

### 입력

첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.

### 출력

첫째 줄에 N의 사이클 길이를 출력한다.

### 풀이

```js
const input = +require("fs").readFileSync("/dev/stdin").toString();

let num = input;
let sum;
let count = 0;

while (true) {
  count++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (num === input) break;
}

console.log(count);
```
