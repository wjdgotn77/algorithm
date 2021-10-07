# 3단계 for문
<br>

## 2739번 구구단
### 문제
N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

### 풀이
```js
const readline = require("readline");
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ").map((item) => parseInt(item));
  }).on("close", function () {
    const num = input[0];

    for(let i = 1; i < 10; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
    }

  process.exit();
  });

```
<br>

## 10950번 A + B - 3
### 문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
### 입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
### 출력
각 테스트 케이스마다 A + B 를 출력한다.

### 풀이
```js
const readline = require("readline");
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
  const count = Number(input[0]);

  for(let i = 1; i <= count; i++) {
    const number1 = Number(input[i].split(" ")[0]);
    const number2 = Number(input[i].split(" ")[1]);

    console.log(number1 + number2);
  }
  process.exit();
});

```
<br>

## 8393번 합
### 문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
### 입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
### 출력
1부터 n까지 합을 출력한다.

### 풀이
```js
const readline = require("readline");
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

// 입력 코드. n이 한 개 주어지기때문에 그대로 받아와서 Number로 형변환 후 실행시켜주기.

rl.on("line", function (line) {
    const num = Number(line);
    let answer = 0;

    for(let i = 0; i <= num; i++) {
      answer = answer + i;
    }
    console.log(answer);
  }).on("close", function () {
      process.exit();
  });

```
<br>

## 15552번 빠른 A + B
### 문제
본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.
### 입력
첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
### 출력
각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

### 풀이
```js
// readline보다 fs가 빠르다.
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 10950번 A + B - 3 문제와 같은 방식으로 작성하면 런타임이 초과된다.
// answer 안에 정답 문자열을 넣어주고 한번에 콘솔에 출력하는 방식을 사용해준다.
const count = Number(input[0]);
let answer  = "";

for (let i = 1; i <= count; i++) {
  const number = input[i].split(" ");
  answer += Number(number[0]) + Number(number[1]) + "\n";
}
console.log(answer);

```
<br>

## 271번 찍기
### 문제
자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
### 입력
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
### 출력
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

### 풀이
```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[0]);
let answer = "";

for (let i = 1; i <= count; i++) {
  answer += i + "\n";
}
console.log(answer);
```
<br>

## 2742번 찍기
### 문제
자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
### 입력
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
### 출력
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

### 풀이
```js
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[0]);
let answer = "";

for (let i = count; i >= 0; i--) {
  answer += i + "\n";
}
console.log(answer);
```
