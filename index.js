var katzDeli = [];

function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeli.length + " in line."
}

function nowServing() {

  if (katzDeli.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeli.shift() + ".";
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length < 1) {
    return "The line is currently empty."
  } else {
    for (i = 0, len = katzDeli.length, text = "The line is currently: ", i < len, i++) {
      text += (i + 1) + ". " + katzDeli[i] + ", ";
    }
  }
  return text
}
