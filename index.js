var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first = array[0];
    array.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(array) {
  if (array.length > 0) {
    var string = "The line is currently: 1. " + array[0];
    for (var i = 1; i < array.length; i++) {
      string = string  + ", " + (i + 1) + ". " + array[i]
    }
  } else if (array.length == 0) {
      return "The line is currently empty.";
    }
   return string;
}
