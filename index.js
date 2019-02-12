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

function currentLine(array) {
  var lineState = "The line is currently";
  var state = [];
  if (array.length === 0) {
    return (lineState + " empty.");
  } else {
    for (var i = 0; i < array.length; i++) {
	    state.push(" " + (i + 1) + ". " + (array[i]));
    }
    return (lineState + ":" + state);
  }
}
