var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var i = katzDeli.indexOf(name) + 1;
  return "Welcome, " + [name] + ". You are number "+ i + " in line.";
}
function nowServing(katzDeli) {
  var length = katzDeli.length; 
  var customer = katzDeli.shift();
  if (length > 1) {
    return "Currently serving " + customer + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else {
    var line = [];
    for (var i=0; i<katzDeli.length; i++) {
      line.push(`${i+1}. ${katzDeli[i]}`)
    }
    return "The line is currently: " + line.join(", ")
  }
}