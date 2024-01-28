// task - 1 
// const fruits = [`Mango`, `Pineapple`, `Apple`, `Orange`, `Kiwi`];
// console.log(fruits[3]);

// console.log(fruits);

// fruits[2] = `Jambura`

// console.log(fruits);




// task - 2 
// const touristDestination = [`Jaflong`, `Sajek`, `Rangamati`];
// console.log(touristDestination);

// touristDestination.push(`Ratargul`);
// console.log(touristDestination);

// touristDestination.push(`Foyez Lake`, `Kaptai`);
// console.log(touristDestination);

// touristDestination.pop();
// console.log(touristDestination);



// task - 3 
// const books = [`Palestine: A Four Thousand Year History`, `How to Win Friends and Influence People`, `Percy Jackson`, `Buyology`];

// books.push(`Javascript`);

// books.includes(`Javascript`) ? console.log(`I have the Javascript book in my collection`) : console.log(`I don't have Javascript book in my collection`);





// task - 4 
const firstVar = `Not a variable lol go home`;
const secondVar = `Are you blind? What's the point of this challenge. You can clearly see duh!!`
const thirdVar = [`Ok`, `it's`, `an`, `array`, `:)`];


Array.isArray(firstVar) ? console.log(`The firstVar is an Array`) : console.log(`The firstVar is not an Array`);

Array.isArray(secondVar) ? console.log(`The secondVar is an Array`) : console.log(`The secondVar is not an Array`);

Array.isArray(thirdVar) ? console.log(`The thidVar is an Array`) : console.log(`The thidVar is not an Array`);

console.log(thirdVar.join(` `));


const fourthVar = [`Watch`, `how`, `I`, `combine`, `Arrays.`];

const concatArray = thirdVar.concat(fourthVar);

console.log(concatArray.join(` `));