function isEven(number){
    const reminder = number % 2;
    // console.log(reminder);
    if(reminder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd');
        return false;
    }
    // return reminder;
}

const myNumberISEven = isEven(367);
console.log(myNumberISEven);