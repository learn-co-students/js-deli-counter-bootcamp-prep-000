var katzDeli = [];
function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}
function nowServing(katzDeli) {
  if (katzDeli.length <1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeli.shift()+ ".";
  }
}
function currentLine(katzDeli) {
  if (katzDeli.length<1) {
    return "The line is currently empty."
  } else {
      var array = [];
    for (var i = 0; i < katzDeli.length; i++) {
      array.push(i+1+". "+katzDeli[i])
    }
    return "The line is currently: " + array.join(", ")
  }
}