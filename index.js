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
  for (let i = 0, l = katzDeli.length; text = "The line is: "; i < l; i++) {
return katzDeli[i];
  }
}
//  return "The line is currently: " + i + "." + katzDeli[i] + ","

//function endOfLine() {
//  if (katzDeli.length = 0) {
//  return "There is nobody waiting to be served!"
//} else {nowServing()}
//}
