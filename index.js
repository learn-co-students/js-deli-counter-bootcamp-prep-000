function takeANumber(katzDeliLine, name) {
  katzDeliLine.push (name)
  var position = (katzDeliLine.length)
  return ("Welcome, " + name + ". You are number " + position + " in line.")
}

function nowServing(katzDeliLine) {
  var replicaDeliLine = katzDeliLine.slice (0);
  katzDeliLine.shift ();
  if (replicaDeliLine.length > 0) {
    return ("Currently serving " + replicaDeliLine[0] + ".")
  } else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var x = 0;
    var lineCurrent = [];
    while (katzDeliLine.length > lineCurrent.length)
    {
      lineCurrent.push (" " + (x+1) + ". " + (katzDeliLine[x]))
      x++
    }
    return ("The line is currently:" + lineCurrent)
  } else {
    return "The line is currently empty."
  }

}
