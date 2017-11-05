var katzDeliLine = [];

function takeANumber (array, name) {
  array.push(name);
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}

function nowServing(array) {
  if (array.length > 0) {
    var inLine = array.shift()
    console.log(inLine)
    return "Currently serving " + inLine + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

nowServing(katzDeliLine);
takeANumber(katzDeliLine, "Chris");
takeANumber(katzDeliLine, "Jack");
takeANumber(katzDeliLine, "Paris");
nowServing(katzDeliLine);
nowServing(katzDeliLine);
console.log(katzDeliLine);
nowServing(katzDeliLine);
nowServing(katzDeliLine);
takeANumber(katzDeliLine, "Jack");
takeANumber(katzDeliLine, "Posey");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);

function currentLine(array) {
  var string = "The line is currently: 1. " + array[0];
  if (array.length === 1) {
    return string
  } else if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      string += ", "
      string += (i + 1) + ". " + array[i];
    }
  } else if (array.length === 0) {
    return "The line is currently empty."
  }
  return string
}
