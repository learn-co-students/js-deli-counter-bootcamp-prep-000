var katzDeli = [];

function takeANumber (katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var n = katzDeliLine.indexOf(newName) + 1;
    return "Welcome, " + newName + ". You are number " + n + " in line.";
  }

function nowServing (katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
  else {
     return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    let list = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      list = list + `${i + 1}. ${katzDeliLine[i]}, `;
    }
    return list.slice(0, list.length - 2);
  }
}
