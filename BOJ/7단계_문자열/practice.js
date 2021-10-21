const input = ["b", "a", "e", "k", "j", "o", "o", "n"];
let str = "";
for (let i = 97; i < 123; i++) {
  str += input.indexOf(String.fromCharCode(i)) + " ";
}
console.log(str.slice(0, -1));
