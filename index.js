
var katzDeli = []

function takeANumber(katzDeli, name){
  var current = katzDeli.length + 1
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${current} in line.`
}

function nowServing(katzDeli){
if (katzDeli.length > 0){
  var person = katzDeli[0]
  katzDeli.shift()
  return `Currently serving ${person}.`
}
else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeli){
if (katzDeli.length > 0) {
  var counter = 1
  var string = "The line is currently: "
  while (counter < katzDeli.length + 1){
  string = string + `${counter}. ` + katzDeli[counter - 1]
    if (counter < katzDeli.length){
      string = string + ", "
    }
  counter++
  }
}
else {
  return "The line is currently empty."
}
  return string
}
