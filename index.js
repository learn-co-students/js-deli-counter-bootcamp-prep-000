function takeANumber (currentLineOfPeople, newPersonName) {
  currentLineOfPeople.push(newPersonName);
  var welcomeMessage = "Welcome, " + newPersonName + ". You are number " + currentLineOfPeople.length + " in line.";
  return welcomeMessage;
}

function nowServing (currentLineOfPeople) {
  if (currentLineOfPeople.length > 0) {
    var currentlyServing = currentLineOfPeople.shift();
    return "Currently serving " + currentlyServing + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (currentLineOfPeople) {
  var message = "The line is currently: ";
    if (currentLineOfPeople.length > 0) {
      for (var i = 0; i < currentLineOfPeople.length; i++) {
        var person = (i + 1) + ". " + currentLineOfPeople[i];
        if (i + 1 < currentLineOfPeople.length) {
        message = message + person + ", ";
        }
        else {
          message = message + person;
        }
      }
    }
    else {
      message = "The line is currently empty.";
    }
    return message;
}