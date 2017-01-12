var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var lineReturn = "The line is currently: "
      for (var i=0; i< katzDeliLine.length; i++){
        lineReturn += `${i+1}. ${katzDeliLine[i]}, `;
      }
      lineReturn = lineReturn.substring(0,lineReturn.length-2)
      return lineReturn;
  }
  else {
    return "The line is currently empty.";
  }
}
