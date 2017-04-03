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

function currentLine () {
  
}