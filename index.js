var katzDeli = [];


function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  var position = katzDeliLine.length;
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`;

  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var currentLine = [];
  if (katzDeliLine.length>0) {
    for (let i = 0; i<katzDeliLine.length; i++) {
      currentLine.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    currentLine.toString();
      return `The line is currently:${currentLine}`
  }
else {
  return "The line is currently empty."
}
}
