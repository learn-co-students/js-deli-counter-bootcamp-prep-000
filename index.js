function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var line = katzDeliLine.length;

  return "Welcome, " + name + ". You are number " + line + " in line."
}

function nowServing(katzDeliLine) {
  var line = katzDeliLine.length
  var firstPerson = katzDeliLine[0];

  if (line == 0) {
    return 'There is nobody waiting to be served!';
  } else {
    katzDeliLine.splice(0,1);
    return "Currently serving " + firstPerson + ".";
  }
}

function currentLine(katzDeliLine) {
  var line = katzDeliLine.length;

  if (line == 0) {
    return "The line is currently empty."
  } else {
    var newArray = [];

    for (var i = 0; i < line; i++) {
      var j = i + 1;
      newArray.push(j + ". " + katzDeliLine[i]);
    }

    return "The line is currently: " + newArray.join(", ");
  }

}
