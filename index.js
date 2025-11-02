//prompt
const userInputString = prompt(
  "Please enter the flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee,"
);

//TODO
//parse user input into froyo flavors array
//build an object to track flavors
//how to update object as iterate thru flavors

//save answers
const flavors = userInputString.split(",");
console.log(flavors);
//split takes the string, uses the separator & and turns in an array
//const flavors is an array
const counts = count(flavors);
//console.table(counts);

function count(flavors) {
  const counts = {}; //making object
  for (const element of flavors) {
    //for of?? loop
    if (element in counts) {
      //for in loop
      counts[element] += 1;
    } else {
      counts[element] = 1;
    }
  }
  return counts; //careful - this was inside the for loop and therefore was only doing the first value once, not repeating
}
console.log(count(flavors));

/*for (let i = 0; i < flavorArray.length; i++) {
  const flavor = flavorArray[i];
    if (orders[flavor] === undefined) {
      orders[flavor] = 0;
    }
    orders[flavor] = orders[flavor] + 1;

const orders = {
    vanilla: 3
    strawberry: 1,
    coffee: 2,
*/
