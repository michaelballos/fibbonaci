//[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...]
function fib(num) { 
  if (num <= 1) 
    return 1;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(5));