# 없는 숫자 더하기

## 문제설명

0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

## 제한사항

- 1 ≤ numbers의 길이 ≤ 9
- 0 ≤ numbers의 모든 수 ≤ 9
- numbers의 모든 수는 서로 다릅니다.

## 입출력 예

| numbers           | result |
| ----------------- | ------ |
| [1,2,3,4,6,7,8,0] | 14     |
| [5,8,4,0,6,7,9]   | 6      |

## 풀이

```js
function solution(numbers) {
  var array = [];
  var sum = 0;

  for (let i = 0; i < 10; i++) {
    array.push(i);
    if (numbers.indexOf(array[i]) === -1) {
      sum += array[i];
    }
  }

  return sum;
}
```

# 자연수 뒤집어 배열로 만들기

## 문제설명

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

## 제한조건

n은 10,000,000,000이하인 자연수입니다.

## 입출력 예

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

## 풀이

```js
function solution(n) {
  var answer = String(n)
    .split("")
    .reverse()
    .map((x) => Number(x));
  return answer;
}
```

# 나누어 떨어지는 숫자 배열

## 문제설명

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

## 제한조건

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

## 입출력 예

| arr           | divisior | return     |
| ------------- | -------- | ---------- |
| [5, 9, 7, 10] | 5        | [5,10]     |
| [2, 36, 1, 3] | 1        | [1,2,3,36] |
| [3, 2, 6]     | 10       | [-1]       |

## 풀이

```js
// 첫번째 풀이.
function solution(arr, divisor) {
  var answer = [];
  arr.map((x) => {
    if (x % divisor === 0) {
      answer.push(x);
    } else {
      return;
    }
  });

  if (!answer.length) {
    return [-1];
  }

  return answer.sort((a, b) => {
    return a - b;
  });
}

// 두번째 풀이 filter
function solution(arr, divisior) {
  var answer = arr.filter((x) => {
    return x % divisior === 0;
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
```
