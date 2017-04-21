var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ` + katzDeli.length + " in line."
}

function nowServing(katzDeli){
  var currentPerson = katzDeli[0]
  if (katzDeli.length===0) {
    return "There is nobody waiting to be served!"
  }
  else{
    katzDeli.shift();
  return "Currently serving " + currentPerson + "."
}
}

function currentLine(katzDeli){
  if (katzDeli.length===0){
    return "The line is currently empty."
  }
  else {
    let n = 0
    let lineString = "The line is currently: "
    while (n<katzDeli.length) {
    lineString += (n+1) + ". " + katzDeli[n] + ", "
    n++
  }
    return lineString.slice(0, lineString.length-2)
  }
}