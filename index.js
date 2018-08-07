function takeANumber (lineNumber,customer){
  if (lineNumber.length === 0){
  lineNumber[0] = customer;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`;
  } else {
  lineNumber.push(customer);
  return `Welcome, ${customer}. You are number ${lineNumber.length} in line.`;
  }
}
function nowServing (lineNumber){
  if (lineNumber.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
  var currentCustomer = lineNumber[0]
  lineNumber.shift(0)
  return `Currently serving ${currentCustomer}.`

  }
}
function currentLine (lineNumber){
  if (lineNumber.length === 0){
    return `The line is currently empty.`;
  }
  else {
  var countdown = lineNumber.length;
  var newArray = [];
    while (countdown > 0){
    newArray[countdown- 1] = ` ${countdown}. ${lineNumber[countdown- 1]}`;
    --countdown;
    }
  
    return `The line is currently:${newArray}`
  }
}