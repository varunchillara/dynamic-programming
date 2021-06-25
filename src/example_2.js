const memo = {};

const fib = (n) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  f = fib(n - 1) + fib(n - 2);
  memo[n] = f;
  return f;
}

//memoized calls cost O(1)
//number on non memoized calls is n
//fib(1), fib(2) ... fib(n) = O(n)

let result = fib(55);
console.log(result);