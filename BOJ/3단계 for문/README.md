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
});

```
