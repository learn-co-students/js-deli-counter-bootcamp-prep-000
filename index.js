var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return ("Currently serving " + katzDeliLine.shift(0) + ".")
  }
}

function currentLine(katzDeliLine) {
  var array = [];
  var i, a;
  if (katzDeliLine.length == 0) {
    return ("The line is currently empty.")
  }
  else {
    for (i=0; i<katzDeliLine.length; i++) {
      a = " " + (i+1) + ". " + katzDeliLine[i];
      array.push(a);
    }
  }
  return ("The line is currently:" + array);
}
