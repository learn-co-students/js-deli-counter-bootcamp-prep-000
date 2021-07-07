let takeANumber = function(katzDeliLine, name) {
 katzDeliLine.push(name);
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

let nowServing = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstCustomer = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return firstCustomer;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

let currentLine = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    var allCustomers = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var customer = ` ${i+1}. ${katzDeliLine[i]}`
      allCustomers.push(customer)
    }
    allCustomers.toString();
    return `The line is currently:${allCustomers}`;
  }
}