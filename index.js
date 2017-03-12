var katzDeliLine=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  }
  var person=katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length===0) {
    return "The line is currently empty."
  }
  var tempString="The line is currently: ";
  for (var i=0; i<line.length;i++) {
    tempString += `${i+1}. ${line[i]}${i!==line.length-1 ? ", " : ""}`;
  }
  return tempString;
}
