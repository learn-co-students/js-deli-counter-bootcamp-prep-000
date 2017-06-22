var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`//katzDeliLine.length + 1
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var message = `Currently serving ${katzDeliLine[0]}.`;
  katzDeliLine.shift();
  return message;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) return "The line is currently empty.";
  var message = "The line is currently: ";
  for(var i = 0; i < katzDeliLine.length; i++) {
    if(i === katzDeliLine.length - 1) {
      message += `${i+1}. ${katzDeliLine[i]}`;
      return message;
    } else {
      message += `${i+1}. ${katzDeliLine[i]}, `
    }
  }
  //return message;
}
