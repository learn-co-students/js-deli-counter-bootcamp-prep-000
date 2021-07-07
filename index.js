function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  var lineNumber = katzDeliLine.indexOf(customer) + 1;
  return `Welcome, ${customer}. You are number ${lineNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var numberedLine = "";
    var i = 0;
    for (; i < katzDeliLine.length - 1; i++) {
      numberedLine = numberedLine + ` ${i + 1}. ${katzDeliLine[i]},`;
    }
    numberedLine = numberedLine + ` ${i + 1}. ${katzDeliLine[i]}`;
    return "The line is currently:" + numberedLine;
  } else {
    return "The line is currently empty.";
  }
}