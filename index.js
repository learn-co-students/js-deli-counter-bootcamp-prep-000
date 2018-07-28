var katzDeli = [ ];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return katzDeliLine.length + 1;
}

function nowServing() {
  
  if (katzDeli.length > 0) {
    return katzDeli.shift();
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var prefix = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      prefix += i ". " katzDeliLine[i] + ","
    }
  } else {
    return 'The line is currently empty.'
  }
}