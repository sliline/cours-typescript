function fibIterative(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let suivant = a + b;
    a = b;
    b = suivant;
  }

  return a;
}

function fibRecursive(n) {
  if (n <= 1) {
    return n;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.assert(fibIterative(0) === 0, "fib(0) devrait être 0");
console.assert(fibIterative(6) === 8, "fib(6) devrait être 8");

console.assert(fibRecursive(0) === 0, "fib(0) devrait être 0");
console.assert(fibRecursive(6) === 8, "fib(6) devrait être 8");

console.time("fibRecursive(40)");
console.log(fibRecursive(40));
console.timeEnd("fibRecursive(40)");
