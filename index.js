function takeANumber(katzDeliLine8, newname) {
  katzDeliLine8.push (newname);
  return ("Welcome, " + newname + ". You are number " + katzDeliLine8.length + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextname  = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " + nextname + ".");
  }
  else {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine8) {
    var message = "";
    var counter = 0;
    if (katzDeliLine8.length > 0) {
      message = "The line is currently:";
      for (var i = 0; i < katzDeliLine8.length; i++) {
        counter = i + 1
        message = message + " " + counter + ". " + katzDeliLine8[i]
        if (katzDeliLine8.length - counter > 0) {
            message = message + ",";
        }
      }
    }
    else {
      message = "The line is currently empty."
    }
    return message;
}
