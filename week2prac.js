// 1. Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).

function areaCircle(radius) {
 let Area = 3.14 * radius * radius;
 console.log(Area);
}
areaCircle(4);

// 2. Simulate rolling a dice using random(). The function should allow the caller to specify any number of sides, but default to 6 if no side count is given: roll() (assume 6 sided, return random number between 1 and 6) vs. roll(50) (50 sided, return number between 1 and 50).[You might need Math class or specifically Math.random() to produce a random number in JavaScript]

function roll(sides = 6) {
 let dice = Math.floor(Math.random() * sides) + 1;
 console.log(dice);
}
roll(); // testing with default 6 sides
roll(10); // testing with 10 sides

// 3. Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F".

function convertFar(Celcius) {
 const Farenheit = (Celcius * 9) / 5 + 32;
 console.log(Farenheit);
}
convertFar(50); // Calling the function with different temps in celcius
convertFar(0);

// 4. Modify your solution to the previous function to allow a second argument: "F" or "C", and use that to determine what the scale of the value is, converting to the opposite: convert(122, "F") should return "50 C".

function convert2(temp, flag) {
 if (flag == "C") {
  // convert Far --> Cels
  const celcius = ((temp - 32) * 5) / 9;
 } else if (flag == "F") {
  // convert Cels --> Far
  const Farenheit = (temp * 9) / 5 + 32;
 } else {
  return "Invalid Scale";
 }
}
convert2(122, "F");
convert2(0, "C");
// 5. Function taking any number of arguments (Numbers), returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false.

// "..." allows a function to accept any number an an array (list)
function isUnder50(...numbers) {
 return numbers.every((num) => num < 50);
}
console.log(isUnder50(1, 2, 3, 5, 4)); // true bc all numbers under 50
console.log(isUnder50(1, 2, 3, 5, 4, 65)); // false bc 65 is above 50

// 6. Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6.

function sumof(...nums) {
 return nums.reduce((total, num) => total + num, 0);
}
// the reduce method adds the number to the total accumulator
console.log(sumof(1, 2, 3));

// 7. Function to check if a number is a multiple of 3 (returns true or false)
function mult3(number) {
 return number % 3 === 0;
}
console.log(mult3(9)); // should say true
console.log(mult3(7)); // should say false

// 8. Function to subtract a discount % from a total. If no % is given, return the original value.

function discount(total, discount = 0) {
 const discountAmt = total * (discount / 100);
 return total - discountAmt;
}

console.log(discount(100, 10)); // should display 90
console.log(discount(50)); // should display 50. No discount

// 9. Function that takes a number of seconds as a Number, returning a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest minute.

// I am lost and have no idea how to do this one.

// 10. Modify your solution above to only include units that make sense: "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc

// Therefore, I can not complete this one either
