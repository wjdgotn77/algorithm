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
let arr = input.map((item) => Number(item));

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
