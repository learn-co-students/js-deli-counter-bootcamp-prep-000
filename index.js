var katzDeli = [];

function takeANumber(katzDeli, newCustomer) {
  if (katzDeli.length > 0);
    katzDeli.push(newCustomer);
    return ("Welcome, " + newCustomer + ". You are number " + katzDeli.length + " in line.");
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  }
  var customer = line.shift();
  return ("Currently serving " + customer + "."); 
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
    var customerAndNumber = [];
    for (var index=0; index<katzDeliLine.length; index++) {

    customerAndNumber.push(index + 1 + ". " + katzDeliLine[index])    
  }
  return "The line is currently: " + customerAndNumber.join(", ");
}
