var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + katzDeli[katzDeli.length - 1] + ". You are number " + katzDeli.length + " in line.";
}
function nowServing(katzDeli) {
  if (katzDeli.length >= 1) {
    return ("Currently serving " + katzDeli.shift() + ".");
  }
  else if(katzDeli.length < 1) {
    return ("There is nobody waiting to be served!");
  }
}
function currentLine(katzDeli) {
  if (katzDeli.length < 1) {
    return "The line is currently empty."
  }
  else if (katzDeli.length > 0) {
    var katzDeliLine = []
    for (var i = 0; i < katzDeli.length; ++i) {
      katzDeliLine.push(" " + (i + 1) + ". " + katzDeli[i]);
    }
    return "The line is currently:" + katzDeliLine
  }
}
