function takeANumber(current,name) {
  current.push(name);
  return ("Welcome, " + name + ". You are number " + (current.length) + " in line.");
}
function nowServing(katzDeliLine) {
  var first = katzDeliLine[0];
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift(0);
    return "Currently serving " + first + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine) {
  var str ="The line is currently: ";
  if (katzDeliLine.length >0) {
    for (var i=1;i<katzDeliLine.length;i++) {
      str+= i + ". " + katzDeliLine[i-1] + ", ";
    } 
    str+= i + ". " + katzDeliLine[i-1]
  } else {
    return "The line is currently empty.";
  }
  return str;
}