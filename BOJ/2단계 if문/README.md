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

## 2753번 윤년
### 문제
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

### 풀이
```js
const fs = require("fs");
const year = fs.readFileSync("/dev/stdin");

year % 4  === 0 && year % 100 !== 0 || year % 400 === 0 ? console.log(1) : console.log(0);

```
<br>

## 14681번 사분면 고르기
### 문제
흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.
예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.
점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

### 풀이
이번 문제부터 fs모듈에 런타임 에러가 나서 통하지 않는다. readline 모듈을 써야한다.
되도록이면 계속 readline 모듈로 쓰는 수 밖에 없다고 봐야한다.

```js
const readline = require("readline");
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

let input = [];

rl.on("line", function (line) {
    input.push(parseInt(line));
  }).on("close", function () {
    const x = input[0];
    const y = input[1];

    if (x > 0 && y > 0) {
      console.log("1");
    } else if (x < 0 && y > 0) {
      console.log("2");
    } else if (x < 0 && y < 0) {
      console.log("3");
    } else {
      console.log("4");
    }

    process.exit();
});

```
<br>

## 2884번 알람시계
### 문제
상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.
이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.
바로 "45분 일찍 알람 설정하기"이다.
이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.
현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

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
  let hours = input[0];
  let minutes = input[1];

  if ((minutes - 45) < 0) {
    hours - 1 < 0 ? hours = 23 : hours -= 1;
    minutes = (minutes + 60) - 45;
  } else {
    minutes = minutes - 45;
  }
  console.log(`${hours} ${minutes}`);

  process.exit();
});

```
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
