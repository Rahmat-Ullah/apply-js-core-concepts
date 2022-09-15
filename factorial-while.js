function factorial(number){
    let num = 1;
    let result = 1;
    while(num <=number){
        result = result * num;
        num++;
    }
    return result;
}
const number = 7;
const fact = factorial(number);
console.log('factorial of: ', number, fact);