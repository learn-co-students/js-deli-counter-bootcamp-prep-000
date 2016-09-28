
var takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position =  katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`
}

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var guest = katzDeliLine.shift();
    return `Currently serving ${guest}.`
    }
  }

var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
      var line = "The line is currently: ";
      for (var i = 0; i < katzDeliLine.length; i++) {
        var line = line + (i+1) + ". " + katzDeliLine[i] + ", ";
      }
      var myString = line.slice(0, -2);
      return myString
  }
}
