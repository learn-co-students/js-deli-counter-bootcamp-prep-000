var katzDeliLine = [];

function takeANumber (arr, name) {
  arr.push(name);
  return("Welcome, " + name + ". You are number " + (arr.length) + " in line.");
}

function nowServing (arr) {
  if (arr.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var current = arr[0];
    arr.shift();
    return "Currently serving " + current + ".";
  }
}

function currentLine (arr) {
  if (arr.length === 0) {
    return "The line is currently empty.";
  }
  var result = "The line is currently: ";
  for (var i = 0; i < arr.length;  i++) {
    if (i < arr.length - 1) {
      result = result + (i+1) + ". " + arr[i] + ", ";
    } else {
      result = result + (i+1) + ". " + arr[i];
    }
  } return result;
}