// program to count down numbers to 1
function countDown(number) {
    console.log(number);
    const newNumber = number - 1; 
    if (newNumber >= 0) {
        countDown(newNumber);
    }
}
countDown(10); 
 
