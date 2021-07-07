var katzDeliLine = [];

function takeANumber (array, firstName) {
  array.push(firstName);
  return "Welcome, " + firstName + ". You are number " + (array.length) + " in line.";
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + array.shift() + ".";
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  } else {
    var response = "The line is currently: ";
    for (var i = 0; i < array.length; i++) {
      response = response + (i + 1) + ". " + array[i];
      if (i < array.length - 1) {
        response = response + ", ";
      }
    }
  } return response;
}
