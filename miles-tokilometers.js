function milesToKilometers(miles){
    const kilometers = miles * 1.6;
    return kilometers;
}

const gazipurToDhakaMiles = 30;
const gazipurToDhakaKilometers = milesToKilometers(gazipurToDhakaMiles);
console.log(gazipurToDhakaKilometers);