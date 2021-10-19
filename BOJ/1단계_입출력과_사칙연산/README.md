# 1단계 입출력과 사칙연산 풀이
<br>
<br>

# 1000번 A + B
## 문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

### 풀이
```js
const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
console.log(Number(input[0]) + Number(input[1]));
```
<br>

# 1001번 A - B
## 문제
두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

### 풀이
```js
const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
console.log(Number(input[0]) - Number(input[1]));
```
<br>

# 10172번 개
## 문제
아래 예제와 같이 개를 출력하시오.

## 예제
```
|\_/|
|q p|   /}
( 0 )"""\
|"^"`    |
||_/=\\__|
```
### 풀이
`` 백틱과 \ 사용하여 특수 문자를 출력.
```js
console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|
`);
```
<br>

# 10998번 A x B
## 문제
두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

### 풀이
```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(Number(input[0]) * Number(input[1]));
```

<br>

# 10430번 나머지
## 문제
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까? <br>
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까? <br>
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오. <br>

### 풀이
```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

console.log( (A + B) % C);
console.log( ((A % C) + (B % C)) % C);
console.log( (A * B ) % C);
console.log(((A % C) * (B % C)) % C);
```
<br>

# 2588번 곱셈
## 문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
<br>
<img src="https://www.acmicpc.net/upload/images/f5NhGHVLM4Ix74DtJrwfC97KepPl27s%20(1).png">

### 풀이
```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const A = Number(input[0]);
const B = input[1].split("");

const first_B = Number(B[0]);
const second_B = Number(B[1]);
const third_B = Number(B[2]);

const result1 = A * third_B;
const result2 = A * second_B;
const result3 = A * first_B;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result1 + (result2 * 10) + (result3 * 100));

```
<br>
