# 5단계 1차원배열

<br>

## 10818번 최소,최대

### 문제

N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

### 출력

첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

### 풀이

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const idx = Number(input[0]);
let arr = input[1].split(" ").map((item) => Number(item));

arr.sort((a, b) => {
  return a - b;
});

console.log(`${arr[0]} ${arr[idx - 1]}`);
```

<br>

## 2562번 최댓값

### 문제

9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.<br>
예를 들어, 서로 다른 9개의 자연수<br>
3, 29, 38, 12, 57, 74, 40, 85, 61<br>
이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

### 입력

첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

### 출력

첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

### 풀이

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = input.map((item) => Number(item));

// arr의 첫번째 숫자를 기준으로 for문을 이용해 비교해준다.
let max = arr[0];
let idx = 0;

for (let i = 1; i < 10; i++) {
  if (max < arr[i]) {
    max = arr[i];
    idx = i;
  }
}

console.log(`${max}\n${idx + 1}`);
```

<br>

## 2577번 숫자의 개수

### 문제

세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.<br>
예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.

### 입력

첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.

### 출력

첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다. 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.

### 풀이

```js
//  방법 1
//  백준에서는 출력형식이 잘못되었다고 뜨지만, JS bin 또는 console에서 실행시 정답을 얻을 수 있다.
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const num = (input[0] * input[1] * input[2]).toString();
const countList = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

const arr = num.toString().split("").map(Number);

for (const key in countList) {
  for (let i = 0; i < 10; i++) {
    if (arr[i] === +key) {
      countList[key] = countList[key] + 1;
    }
  }
}

for (const key in countList) {
  console.log(`${countList[key]}\n`);
}

//  방법 2
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const num = String(input[0] * input[1] * input[2]);
for (let i = 0; i < 10; i++) {
  let count = 0;

  for (let j = 0; j < num.length; j++) {
    if (Number(num[j]) === i) {
      count++;
    }
  }
  console.log(count);
}
```

<br>

## 3052번 나머지

### 문제

두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.
<br>
수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

### 출력

첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

### 풀이

```js
//  방법 1. indexOf + forEach
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const arr = [];

input.forEach((n) => {
  let num = n % 42;
  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }
});

console.log(arr.length);

//  방법 2. 중복 요소를 제거하는 객체를 만들어주는 set 사용
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));
const arr = input.map((item) => item % 42);
const newSet = new Set(arr);
const result = [...newSet];
console.log(result.length);
```

<br>

## 1546번 평균

### 문제

세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다. <br>
예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.<br>
세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.

### 출력

첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.

### 풀이

```js
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const index = Number(input[0]);
let scoreList = input[1]
  .split(" ")
  .map((item) => Number(item))
  .sort((a, b) => {
    return a - b;
  });

const num = scoreList.map((score) => {
  return (score / scoreList[index - 1]) * 100;
});

let sum = 0;

for (let i = 0; i < index; i++) {
  sum += num[i];
}

console.log(sum / index);
```

<br>

## 8958번 OX퀴즈

### 문제

"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.<br>
"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.<br>
OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.

### 출력

각 테스트 케이스마다 점수를 출력한다.

### 풀이

```js
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const idx = Number(input[0]);

for (let i = 1; i < num + 1; i++) {
  let sum = 0;
  let count = 0;
  const arr = input[i].split("");

  arr.forEach((flag) => {
    if (flag === "O") {
      count++;
      sum += count;
    } else {
      count = 0;
    }
  });
  console.log(sum);
}
```
