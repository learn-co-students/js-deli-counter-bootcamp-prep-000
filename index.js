

var katzDeliLine = []


// function takeANumber(katzDeliLine, name){
//
//   katzDeliLine.push(name); //we're adding the customer names to que array (line)
//
//   var number = 1 + (katzDeliLine.indexOf(name));
//   // (grabbing the index and because arrays and strings are zero indexed we add 1 to give customer actual number in que)
//   return 'Welcome, '+ name + '. You are number ' + number + ' in line.';
// }

var count = 0;

function takeANumber(){
  count++;

  return 'Welcome!. You are number ' + count + ' in line.';
}

var currentCustomer = 1;

function nowServing(){

  var beingServed = currentCustomer;
  currentCustomer = currentCustomer + 1
  return beingServed;

}

// function nowServing(katzDeliLine){
//
//   if(katzDeliLine.length === 0){ //checking if line empty
//     return "There is nobody waiting to be served!";
//   } else {
//   return "Currently serving " + katzDeliLine.shift()+ "."; // if not we return first element from beginning of array and shift it out
//   }
//
// }


function currentLine(katzDeliLine){

  var statement = "The line is currently: " // same statement in all cases if line not empty

  if(katzDeliLine.length === 0){ //checking if line is empty
    return "The line is currently empty.";
  } else {
  // if line not empty we do the following
    statement += "1. " + katzDeliLine[0]; //first element in line

    for (var i = 1; i < katzDeliLine.length; i++) {
      var customer = katzDeliLine[i];

      statement +=  ", " + (1 + i) + ". " + customer  // adding to the string statement
      // created a loop so regardless of the number of people inside it always prints the right que
    }

    return statement; // returns the whole que;

  }

}
