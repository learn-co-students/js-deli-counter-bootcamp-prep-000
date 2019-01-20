function takeANumber(currentLine,newCustomer) {
  var customerNumber = currentLine.length + 1;
  currentLine = currentLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${customerNumber} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var customerServed = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${customerServed}.`;
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var theLine = `The line is currently:`;
    for (var i=0; i<line.length-1; i++){
      theLine = theLine + ` ${i+1}. ${line[i]},`;
    }
    theLine = theLine + ` ${line.length}. ${line[line.length-1]}`;
    return theLine;
  }
}