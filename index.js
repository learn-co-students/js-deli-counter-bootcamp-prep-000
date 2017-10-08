var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (katzDeliLine.indexOf(name) + 1);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return katzDeliLine;
  }
}

function currentLine(katzDeliLine) {
  var array = [];
  var i;
  if (katzDeliLine.length == 0) {
    return ("The line is currently empty.")
  }
  else {
    for (i=0; i<katzDeliLine.length; i++) {
      a = i + ". " + katzDeliLine[i];
      array.push(a);
    }
  }
  return ("The line is currently: " + array);
}
