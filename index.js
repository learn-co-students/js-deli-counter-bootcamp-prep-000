
var katzDeli = [];
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var newMessage = `Welcome, ` + newName + `. You are number ` + katzDeliLine.length + ` in line.`;
  return newMessage;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `There is nobody waiting to be served!`;
  } else if (katzDeliLine.length > 0) {
    var curSer = `Currently serving ` + katzDeliLine[0] + `.`;
    katzDeliLine.shift();
    return curSer;
      }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else if (katzDeliLine.length > 0) {
    var curLine = "The line is currently:"
    var curList = [];
    for ( let i = 0; i < katzDeliLine.length; i++) {
      curList.push(` ` + (i + 1) + `. ` + katzDeliLine[i]);
    }
    curLine = curLine + curList ;
    return curLine;
  }
}
