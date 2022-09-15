function getSum(numbers){
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [23, 12, 24, 45, 56, 67,78];
getSum(myNumbers);