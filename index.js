var customerQueue = [];

function takeANumber(customerQueue, customerName) {
  var no_in_line = customerQueue.push(customerName);
  return `Welcome, ${customerName}. You are number ${no_in_line} in line.`;
}

function nowServing(customerQueue) {
  if (customerQueue.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var topOfQueue = customerQueue.shift();
  return `Currently serving ${topOfQueue}.`;
}

function currentLine(customerQueue) {
  if (customerQueue.length === 0) {
    return "The line is currently empty.";
  }
  var i = 0;
  var lineString = "The line is currently: ";
  while(i < customerQueue.length) {
    if ((i+1) === customerQueue.length) { // To test if we are at the 
      lineString += i+1 + ". " + customerQueue[i]; // of the array queue
      break;
    }
    lineString += i+1 + ". " + customerQueue[i] + ", ";
    i++;
  }
  return lineString;
}
