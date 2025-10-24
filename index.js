const userInputString = prompt(
  "Please enter the flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee,"
);

function getFlavors(userInputString) {
  const orders = {};
  const flavorArray = userInputString.split(",");
  console.log(flavorArray);
  for (let i = 0; i < flavorArray.length; i++) {
    const flavor = flavorArray[i];
    if (orders[flavor] === undefined) {
      orders[flavor] = 0;
    }
    orders[flavor] = orders[flavor] + 1;
  }
  return orders;
}

/*const orders = {
    vanilla: 3
    strawberry: 1,
    coffee: 2,
}*/
