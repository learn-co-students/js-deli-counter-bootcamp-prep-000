var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return "Currently serving " + katzDeli.shift() + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {
  var katzDeliLineDisplay = "The line is currently: ";
  if (katzDeli.length > 0) {
    for (let i = 0; i < katzDeli.length; i++) {
      katzDeliLineDisplay = katzDeliLineDisplay + (i + 1) + ". " + katzDeli[i] + ", ";
    }
  return katzDeliLineDisplay.substring(0, (katzDeliLineDisplay.length - 2))
  }
  else {
    return "The line is currently empty."
  }
}