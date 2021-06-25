
//n:      1, 2, 3, 4, 5, 6,  7,  8,  9   <--- index
//fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34...<--- fib

// find nth number, in the fib sequence.
//let's start with the niave fib algo.
const fib = (n) => {
  //base case
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// let result = fib(55);
// console.log(result);

// 2^55 = 3.6028797e+16

// const foo = (n) => {
//   if (n <= 1) {
//     return;
//   }
//   foo(n - 1);
// }

// const bar = (n) => {
//   if (n <= 1) {
//     return;
//   }
//   foo(n - 2);
// }

// const dib = (n) => {
//   if (n <= 1) {
//     return;
//   }
//   dib(n-1);
//   dib(n-1);
// }

// const lib = (n) => {
//   if (n <= 1) {
//     return;
//   }
//   dib(n-2);
//   dib(n-2);
// }