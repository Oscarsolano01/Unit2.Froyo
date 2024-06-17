// const froyoOrder = {
//  Vanilla:2,

// }
// step1 : prompt the user for a list of flavors, seperated by commas - save this STIRNG  in a variable

const usersOrder = prompt(
  "please enter the flavors you would like to order:","vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(usersOrder);

// step 2: take the variable from step 1 and turn it into an ARRAY - we just want the flavors (which were separated by the commas in the string from step 1)
const ordersArr = usersOrder.split(",");
console.log(ordersArr);

// step 3: now that we have an ARRAY, lets go through that array and create our condensed list (this is the list where flavors apprear once with their order count) Our condensed list shold be an OBJECT that we create dynamically.

const ordersCondensed = {};

for (let i = 0; i < ordersArr.length; i++) {
 if(ordersCondensed[ordersArr[i]]) {
  ordersCondensed[ordersArr[i]] += 1;
 } else {
  ordersCondensed[ordersArr[i]] = 1;
 }


}

console.table(ordersCondensed);
// Step 4: turn that condensed list into a table with console.table
