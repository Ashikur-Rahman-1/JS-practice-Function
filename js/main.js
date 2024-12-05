//examples of some built in functions

// let myName = "Mr John Mr";
// console.log(myName.length);
// console.log(myName.at(3));
// console.log(myName.at(myName.length - 1));
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.charAt(0));
// console.log(myName.charCodeAt(0));

// console.log(myName.concat("Hello"));

// console.log(myName.trimStart());
// console.log(myName.trimEnd());
// console.log(myName.repeat(5));
// console.log(myName.replace("Mr", "Mrs"));
// console.log(myName.replaceAll("Mr", "Mrs"));

// console.log(myName);

// for (let i = 0; i < myName.length; i++) {
//   if (myName.at(i) == " ") {
//     continue;
//   }
//   console.log(myName.at(i));
// }

// console.log(myName.slice(3, 7));

// function sum(a = 0, b = 0) {
//   console.log(a + b);
// }
// sum();
// sum(5, 500);

// function sum(...all) {
//   let res = 1
//   for (let index = 0; index < all.length; index++) {
//     res *= all[index];
//   }
//   return res;
// }
// console.log(sum(5, 10, 15, 20, 30, 50));

function sum(...all) {
  let res = all.reduce(function (prv, cur) {
    console.log("p", prv);
    console.log("c", cur);
    return prv + cur;
  });
  return res;
}
console.log(sum(5, 10, 15, 20, 30, 50));
