# 2단계 if문
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
