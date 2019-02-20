function takeANumber(array, name) {
  array.push(name);
  return ("Welcome, " + name + ". You are number " + array.length + " in line.");
}

function nowServing(katzDeliLine) {
  for (var i = katzDeliLine.length; i > 0; i--) {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " + name + ".");
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(deliLine) {
  var state = [];
  if (deliLine.length === 0) {
    return ("The line is currently empty.");
  } else {
    for (var i = 0; i < deliLine.length; i++) {
	    state.push(" " + (i + 1) + ". " + (deliLine[i]));
    }
    return ("The line is currently:" + state);
  }
}
