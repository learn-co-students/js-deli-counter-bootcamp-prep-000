function takeANumber(array, name) {
  var lineNumber = array.length + 1;
    array.push(name);
    return ("Welcome, " + name + ". You are number " + lineNumber + " in line.");
}

function nowServing(array) {
    if (array.length >= 1) {
    var ret = ("Currently serving " + array[0] + ".");
    array.shift();
    return ret;
}
  else {
    return "There is nobody waiting to be served!";
}
}

function currentLine(array) {
  let n = 0
  var newArray = [];
  if (array.length >= 1) {
      for (var i = array.length; i >= 1; i--) {

        let spotInLine = n + 1;
        newArray.push(" " + spotInLine + ". " + array[n]);
        n++;
      }
        return "The line is currently:" + newArray;
      }
  else {
    return "The line is currently empty."
  }
}
