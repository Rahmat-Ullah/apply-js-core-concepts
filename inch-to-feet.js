// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log(dadaFeet);


function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 134;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);


const nanaInches = 174;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);