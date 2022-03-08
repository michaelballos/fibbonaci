const fibSeq = function fib(num) { 
  if (num == 1) {
    return 1; 
   
  }
  if (num == 1) {
    return 1;
  }
  else {
    return fib(num - 1) + fib(num - 2);
  }
};


//[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...]

