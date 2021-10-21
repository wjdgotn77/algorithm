# 7단계 문자열

<br>

## 11654번 아스키코드

### 문제

알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

### 입력

알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

### 출력

입력으로 주어진 글자의 아스키 코드 값을 출력한다.

### 풀이

```js
const input = require("fs").readFileSync("/dev/stdin").toString();
// String.charCodeAt(index) => index default값은 0.
console.log(input.charCodeAt(0));
```

<br>

## 11720번 숫자의 합

### 문제

N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

### 출력

입력으로 주어진 숫자 N개의 합을 출력한다.

### 풀이

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const idx = Number(input[0]);
let result = 0;

const number = input[1].split("").map((item) => {
  result += Number(item);
});

console.log(result);
```

<br>

## 10809번 알파벳 찾기

### 문제

알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.

### 출력

각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.<br>
<br>
만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.

### 풀이

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("");
let str = "";
for (let i = 97; i < 123; i++) {
  str += input.indexOf(String.fromCharCode(i)) + " ";
}
console.log(str.slice(0, -1));
```

<br>

## 2675번 문자열 반복

### 문제

문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다. <br>
QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%\*+-./: 이다.

### 입력

첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다.

### 출력

각 테스트 케이스에 대해 P를 출력한다.

### 풀이

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const idx = Number(input[0]);
let result = "";

for (let i = 1; i <= idx; i++) {
  const test = input[i].split(" ");

  const count = Number(test[0]);
  const words = test[1].split("");

  for (let j = 0; j < words.length; j++) {
    for (let k = 0; k < count; k++) {
      result += words[j];
    }
  }
  result += "\n";
}

console.log(result);
```
