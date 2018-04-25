var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
   if (katzDeliLine.length == 0) {
     return("There is nobody waiting to be served!")
  }
   else {
     return(`Currently serving ${katzDeliLine.shift()}.`)
   }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine == 0) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently:" + katzDeliLine.map(function(name, pos) {
      if  (katzDeliLine[0]) {
        return ` ${(pos + 1)}. ${name}`
      }
      else {
      return  ` ${(pos + 1)}. ${name}`
    }
    })
    }
  }
