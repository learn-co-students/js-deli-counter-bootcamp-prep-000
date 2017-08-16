var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  var position = array.length;
  var response = "Welcome, " + name + ". You are number " + position + " in line.";
  return response;
}

function nowServing(array) {
  if (array.length > 0) {
    var response = "Currently serving " + array.shift() + ".";
    return response;
    return array;
  } else { return "There is nobody waiting to be served!";}
}

function currentLine(array) {
  if (array.length > 0) {
    var response = "The line is currently: ";
    for (var i = 0; i < array.length; i++) {
      var position = i + 1;
      response = response + position + ". " + array[i];
      if ( array.length > 1 && i < (array.length - 1)) {
        response = response + ", ";
      }
    }
    return response;
  } else { return "The line is currently empty.";}
}
