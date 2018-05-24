var katzDeli = [];
var positionInLine = [];
var newPersonName;

function takeANumber (katzDeli,newPersonName) {
    katzDeli.push(newPersonName);
    var katzDeliLine = katzDeli.length;
    return `Welcome, ${newPersonName}. You are number ${katzDeliLine} in line.`;
}

function nowServing (katzDeli) {
  if (katzDeli.length>0) {
    return `Currently serving ${katzDeli.shift()}.`;
    }else{
    return `There is nobody waiting to be served!`;
  }
}

function currentLine (katzDeli) {
  for (var i=0;i<katzDeli.length;i++){
    positionInLine.push(` ${i+1}. ${katzDeli[i]}`);
  }
  if (katzDeli.length>0) {
    return `The line is currently:${positionInLine}`;
    }else{
    return `The line is currently empty.`;
  }
}