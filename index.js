function takeANumber (katzDeliLine, lineName) {
  var PersonWaiting;
  var PersonNumber;
  PersonWaiting = katzDeliLine.push(lineName);
  PersonNumber = katzDeliLine.length;
  return `Welcome, ${lineName}. You are number ${PersonNumber} in line.`
}
function nowServing (katzDeliLine) {
  var katzName;
  if (katzDeliLine.length ==0) {
    return "There is nobody waiting to be served!";
  }
  else {
    katzName = katzDeliLine.shift();
    return `Currently serving ${katzName}.`
  }
}
function currentLine(katzDeliLine) {
  var CurrentLine = "The line is currently: ";
  var CurrentLineResult="";
  var NewLine;
  var i;
  var j=0;
  if (katzDeliLine.length == 0) {
    return 'The line is currently empty.';
  }
  else {
  CurrentLineResult = CurrentLine;
  for (i = 0; i < katzDeliLine.length; i++) {
    j = i+1;
    CurrentLineResult += j.toString() + ". " + katzDeliLine[i] + ", " ;
  }
  NewLine = CurrentLineResult.substring(0,CurrentLineResult.length -2);
  return NewLine;
}
}
