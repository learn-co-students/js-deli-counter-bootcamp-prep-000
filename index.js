function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var count = katzDeliLine.length - 1;
  var number = katzDeliLine.length;
  return `Welcome, ${katzDeliLine[count]}. You are number ${number} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else if (katzDeliLine.length != 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;

  }
}
function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty.";
  }
  if(line.length != 0) {
      return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
  }

}
