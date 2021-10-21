let input = ["5", "54321"];
let result = 0;
const idx = +input[0];
const number = input[1].split("").map((item) => {
  result += Number(item);
});

console.log(result);
