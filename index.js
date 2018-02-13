function takeANumber (katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine (katzDeliLine) {
  let lineList = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  for (let i = 0; i < katzDeliLine.length; i++) {
    lineList += `${i + 1}. ${katzDeliLine[i]}`;
    if (i !== katzDeliLine.length - 1) {
      lineList += ", ";
    }
  }
  return lineList;
}