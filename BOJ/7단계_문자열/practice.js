const input = ["2", "3 ABC", "5 /HTP"];
const idx = +input[0];
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
