function takeANumber(katzDeliLine, customer) {
  var positionIn = 0;
  katzDeliLine.push(customer);
  positionIn = (katzDeliLine.indexOf(customer) + 1)
  return "Welcome, " + customer + ". You are number " + positionIn + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  var len = katzDeliLine.length;
  if (len === 0) {
    return "The line is currently empty."
  } else {
    var line = "";
    var customer = "";
    for (var i = 0; i < len; i++) {
    	customer = (i + 1) + ". " + katzDeliLine[i];
    	if (i !== len - 1) {
    		customer += ", "
    	}
    	line += customer;
    }
    return "The line is currently: " + line
  }
}
