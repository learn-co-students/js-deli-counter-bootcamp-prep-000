var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return "Welcome, " + name + `. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeli.shift() + "."
  }
}

function currentLine(katzDeli) {
  var line = ""
  var i
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    line = "The line is currently: "
    for(i = 0; i < katzDeli.length - 1; i++) {
      line += `${i + 1}. ` + katzDeli[i] + ", "
    }
    line += `${i + 1}. ` + katzDeli[i]
    return line
  }
  
}