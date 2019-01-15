function takeANumber(customerLine, newCustomer) {
  var position = currentLine.length;
  return "Welcome, #{newCustomer}. You are number #{position} in line.";
}

function nowServing(customerLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    firstPerson = currentLine.shift();
    return "Currently serving #{firstPerson}";
  }
}

function currentLine(customerLine) {
  if (customerLine.length === 0 ) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    customerLine.forEach(function(index, value){
      line + "#{index+1}. #{value},";
    });
  }
}