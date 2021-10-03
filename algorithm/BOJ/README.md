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

# 10998번
## 문제
두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

### 풀이
```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(Number(input[0]) * Number(input[1]));
```
