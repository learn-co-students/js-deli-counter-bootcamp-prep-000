function takeANumber(katzDeliLine, newperson){
  katzDeliLine.push(newperson);
  return `Welcome, ${newperson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var first = katzDeliLine[0];
  var message;

  if (katzDeliLine.length === 0) {
    message = "There is nobody waiting to be served!";
  }
  else {
    message = `Currently serving ${first}.`;
    katzDeliLine.shift();
  }

  return message;
}

function currentLine(katzDeliLine){
  var message = "The line is currently:";

  if (katzDeliLine.length === 0) {
    message = "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      message = `${message} ${i+1}. ${katzDeliLine[i]}${i<katzDeliLine.length - 1 ? ',' : ''}`;
    }
  }

  return message;
}
