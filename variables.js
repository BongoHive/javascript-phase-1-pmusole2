// you solution should be here
let birthYear = 1992;
let futureYear = 2070;
let currentYear = new Date();

// Current age and Future age Calculations
//Current Age calculation
let currentAge = currentYear.getFullYear() - birthYear;

//Future Age calculation
let futureAge = futureYear - birthYear;

// Logs for current year and full age
console.log(`Current age is ${currentAge}`);
console.log(`Future age is ${futureAge}`);

//Amount per day
let amountPerDay = 5;

// Amount for the rest of my life
let yearsTillMaxAge = futureAge - currentAge;
console.log(`Years till max age is ${yearsTillMaxAge}`);

// Calculation on how many I would eat for the rest of my life
let totalNeeded = yearsTillMaxAge * amountPerDay;
console.log(`I would need "${totalNeeded}" to last me the rest of my life`);

// Screen output
document.write(`I would need "${totalNeeded}" to last me until the ripe old age of "${futureAge}"`);
