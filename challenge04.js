let i = 1;
let j = 1;
let k = 1;
let l = 9;
let m = 8;

const push = (i, j, k, l, m) => {
  str =
    i.toString() + j.toString() + k.toString() + l.toString() + m.toString();
  passwords.push(str);
};
const passwords = [];
let str = "";

for (i = 1; i <= j && i < 6; i++) {
  for (j = i; j <= k && j <= 9; j++) {
    for (k = j; k <= l && k <= 9; k++) {
      for (l = k; l <= m && l <= 9; l++) {
        for (m = l; m <= 9; m++) {
          if (l === m && m === 5) {
            push(i, j, k, l, m);
          } else if (k === l && l === 5) {
            push(i, j, k, l, m);
          } else if (j === k && k === 5) {
            push(i, j, k, l, m);
          } else if (i === j && j === 5) {
            push(i, j, k, l, m);
          }
        }
      }
    }
  }
}

console.log(passwords.length, passwords[55]);
