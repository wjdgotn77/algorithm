const input = ["221", "231"];

const reverseNum = input.map(item => {
  return item.split("").reverse().join("");
});

const result = reverseNum.sort((a, b) => {
  return Number(b) - Number(a);
})

console.log(result[0]);