var katzDeliLine = []

// Build a function that a new customer will use when entering the deli. 
function takeANumber (katzDeliLine, customerName){
  // Adding customer to the current line.
  katzDeliLine.push(customerName);
  //Printing the welcome message including the new person's position in line.
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

//Build a function nowServing.

function nowServing (katzDeliLine){
 // conditional statement: 'if there is nobody in line...'
 if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!"
 } /*Or else at index 0 (first customer in line), remove 1 customer (non-destructive method) but could also use shift.*/
 else { 
   return "Currently serving " +katzDeliLine.splice(0, 1)+ ".";
 }
}

//Build a function currentLine.

function currentLine(line){
// If there is nobody in line...  
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    
  /* Function accepts the current line of people and returns the current line as a string.*/
  //Assign array to a new variable
    var numbersAndNames = [];
    for (var i = 0;  i < line.length; i++) {
     numbersAndNames.push(`${i+1}. ${line[i]}`)
    }
     /* join() method joins the elements of an array into a string, and returns the string.*/
    return `The line is currently: ${numbersAndNames.join(', ')}`
  }
}