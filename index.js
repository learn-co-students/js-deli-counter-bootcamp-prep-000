var katzDeli = [];
var katzDeliLine = [];
var newName = [];

function takeANumber(katzDeliLine, newName) {
  
  katzDeliLine.push(newName);
  
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine,newName) {
  
  if(!katzDeliLine.length) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ` + katzDeliLine.shift() + `.`;
  }
  
  return katzDeliLine;
  
}

function currentLine(katzDeliLine) {
  if(!katzDeliLine.length) {
    return `The line is currently empty.`;
  }
  
  var nameSlot = [];
  
  for( var i = 0; i < katzDeliLine.length; i++ ) {
    
    nameSlot.push(i + 1 + `. ` + katzDeliLine[i]);
    
  }
  
  return `The line is currently: ` + nameSlot.join(', ');
  
}