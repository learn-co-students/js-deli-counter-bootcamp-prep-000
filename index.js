function takeANumber(currentLine, name) {
  currentLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + currentLine.length + ' in line.';
}

function nowServing(currentLine) {
  if (!currentLine.length) {
    return 'There is nobody waiting to be served!';
  }
  
  var customer = currentLine.shift();
  
  return 'Currently serving ' + customer + '.';
}

function currentLine(currentLine) {
  if (!currentLine.length) {
    return 'The line is currently empty.';
  }
  
  var customers = '';
  
  currentLine.forEach(function(customer, index) {
    customers += index + 1 + '. ' + customer;
    
    if (index < currentLine.length - 1) {
      customers += ', ';
    }
  });
  
  return 'The line is currently: ' + customers;
}
