//1
var katzDeli = [];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
//2
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
     var next = katzDeliLine.shift();
     return `Currently serving ${next}.`;
  }
}
//3
function currentLine(katzDeliLine) {
  var currentLineList = "";
for(var i = 0; i < katzDeliLine.length; i++) {
  if (i === katzDeliLine.length - 1) {
    currentLineList += `${i+1}. ${katzDeliLine[i]}`;
  } else currentLineList += `${i+1}. ${katzDeliLine[i]}, `;
}

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently: " + currentLineList;
  }
}
