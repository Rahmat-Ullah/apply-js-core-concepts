function leapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        // console.log('your year is a leap year');
        return true;
    }
    else{
        // console.log('your year is not a leap year');
        return false;
    }
}

const yourLeapYear = leapYear(1960);
console.log('Your year is leap year: ', yourLeapYear);
const myLeapYear = leapYear(2013);
console.log('Your year is leap year: ', myLeapYear);