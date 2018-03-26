const katzDeli = [];

function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeli.length + " in line."
}

function nowServing() {
  if (katzDeli.length >= 1) {
    return "Currently serving " + katzDeli.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli) {
  const lineState = [];
  var i;
  if (katzDeli.length < 1) {
    return "The line is currently empty.";}
    for (i = 0; i < katzDeli.length; i++) {
      lineState.push(` ${i + 1}. ${katzDeli[i]}`)
  }
  return "The line is currently:" + lineState;
}
