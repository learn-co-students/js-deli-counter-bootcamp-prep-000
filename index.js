var katzDeli = [];

function takeANumber (katzDeliLine, customerName) {
  var linePosition = katzDeliLine.length + 1;
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${linePosition} in line.`;
}

function nowServing (katzDeliLine) {
  var servedCustomer;
  if (katzDeliLine[0] === undefined) {
    servedCustomer = "There is nobody waiting to be served!"
  } else {
   servedCustomer = `Currently serving ${katzDeliLine[0]}.`;
  }
  katzDeliLine.shift();
  return servedCustomer;
}

function currentLine (katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return "The line is currently empty.";
  } else {
    var theCurrentLine = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      theCurrentLine.push(" " + (i+1) + ". " + katzDeliLine[i]);
    }
    return `The line is currently:${theCurrentLine}`;
  }
}