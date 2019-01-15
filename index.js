function takeANumber(customerLine, newCustomer) {
  customerLine.push(newCustomer);
  var position = customerLine.length;
  return `Welcome, ${newCustomer}. You are number ${position} in line.`;
}

function nowServing(customerLine) {
  if (customerLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var firstPerson = customerLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(customerLine) {
  if (customerLine.length === 0 ) {
    return `The line is currently empty.`;
  } else {
    var line = `The line is currently:`;
    for (var i=0 ; i<customerLine.length-1 ; i++){
      line += ` ${i+1}. ${customerLine[i]},`;
    }
    line += ` ${customerLine.length}. ${customerLine[customerLine.length-1]}`;
    return line;
  }
}