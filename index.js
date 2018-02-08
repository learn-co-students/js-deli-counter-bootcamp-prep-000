function takeANumber(katzDeliLine, customer) {
  var linePos = katzDeliLine.length + 1;
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${linePos} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var nowServing = katzDeliLine.shift();
  return `Currently serving ${nowServing}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var line = "The line is currently: ";
  for(var i = 0; i < katzDeliLine.length; i++) {
    line = line + (i + 1) + ". " + katzDeliLine[i] + ", ";
  }
  line = line.slice(0, -2);
  return line;
}