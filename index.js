var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var number = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + number + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var vb = katzDeliLine.shift();
  return "Currently serving " + vb + ".";   
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var result = katzDeliLine.map(function (value, index) {
    return index+1 + '. ' + value;
  }).join(', ');
  var vr = "The line is currently: " + result;

  return vr;
}
