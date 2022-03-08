//Goal ---->   [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...]
function fib(num, end) {  
  if (num.length >= end) {
    return num;
  }
  num.push(num[num.length - 2] + num[num.length - 1]);
  return fib(num, end);
}
console.log(fib([1,1],10));
const endArray = ['...'];