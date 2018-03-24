var katzDeli = [];

function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeli.length + " in line."
}

function nowServing() {
  for (i = 0; i < katDeli.length; i++) {
    return katzDeli[i];

  }

  return katzDeli[0];
  katzDeli.shift;
}
  function endOfLine() {
  if (katzDeli.length = 0) {
    return "There is nobody waiting to be served!"
  } else {nowServing()}

}

function currentLine(katzDeli) {

  for (let i = 0, l = katzDeli.length; i <= l; i++) {
  return "The line is currently: " + i + "." + katzDeli[i] + ","
  }
}
