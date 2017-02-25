var katzDeliLine = [];

function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving" person;
  } else {
    return "There is nobody waiting to be served";
  }
}

function currentLine () {
  if (katzDeli.length > 0) {
    var str = "The line is currently:";
    for (var i=0; i<katzDeli.length; i++) {
      str += " " i + ". " + katzDeli[i];
    }
    return str;
  } else {
    return "The line is currently empty.";
  }
}