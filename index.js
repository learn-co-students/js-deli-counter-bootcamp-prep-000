// destructively adds a new customer to the array
function takeANumber(currentCustomers, newCustomer) {
  currentCustomers.push(newCustomer); // new customer added to the array
  return `Welcome, ${newCustomer}. You are number ${currentCustomers.length} in line.`
}

// destructively removes the first person from the array
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) { // testing if zero people are in line
    return "There is nobody waiting to be served!"
  } else {
  var firstInLine = katzDeliLine.shift(); // first customer in line removed
  }
  return `Currently serving ${firstInLine}.`;
}

// tests for whether there is anybody in line and returns an ordered list of customers in line
function currentLine(currentCustomers) {
  if(currentCustomers.length === 0) {
    return "The line is currently empty."
  }
  var listOfCustomers = [];
  // creating the list of customers and their place in line
  for(let i = 0; i < currentCustomers.length; i++) {
    listOfCustomers.push(`${i+1}. ${currentCustomers[i]}`);
  }
  return "The line is currently: " + listOfCustomers.join(', ');
}
