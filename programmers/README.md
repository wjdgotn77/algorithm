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
