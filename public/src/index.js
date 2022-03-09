//Goal ----> [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...]
console.log('array sequence');
function fib(num, end) {  
  if (num.length >= end) {
    return num;
  }
  num.push(num[num.length - 2] + num[num.length - 1]);
  return fib(num, end);
}
console.log(fib([1,1],10));
const endArray = ['...'];

/*
Goal 2 -> Write a function that takes in one integer 
and returns the corresponding number in the fibbonaci sequence
*/ 

//non recursive ex w incorrect indexing
const fibonacciSpitter = function dontSwallow(num) {
  if (num < 3) //refers to the first two # in sequence --> [1, 1, 2, 3, 5, 8, 13,...]
  return 1; //returns the first two # in sequence as 1 
  
  let before = 1; //1
  let current = 1; //1
// if i = 2 
  for (let i = 2; i < num; i++) {
    const next = before + current; // 1 + 1 = 2
    before = current; // initially doesnt change bc before and current both start as 1
    current = next; // current changes bc next was defined with 2 
  }
  return current; 
};
 
console.log('non recursive');
console.log(fibonacciSpitter(2));


//my modified recursive version w correct indexing 
const slimThick = function skinnyPenis(num) {
  if (num < 2) //refers to the first two # in sequence --> [1, 1, 2, 3, 5, 8, 13,...]
  return 1; 
  return slimThick(num - 2) + slimThick(num - 1);
};
console.log('recursive');
console.log(slimThick(4));

