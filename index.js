function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return "Welcome, " + name + "." + " You are number " + katzDeli.length + " in line."
  }

function nowServing(deliLine) {
  if (deliLine.length==0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + deliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  var newLine = []
  if (katzDeliLine.length==0) {
    return "The line is currently empty."
  }
   else {
     for (let i=0; i<katzDeliLine.length; i++) {
       newLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${newLine.join()}`
  }
}
