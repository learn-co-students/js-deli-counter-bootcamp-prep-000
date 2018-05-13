var katzDeli = [];

function takeANumber(katzDeliLine, personsName) {
  katzDeliLine.push(personsName)
  return `Welcome, ${personsName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!"
 } else {
   var person = katzDeliLine[0]
   katzDeliLine.shift()
   return `Currently serving ${person}.`
 }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineList = []
    katzDeliLine.forEach((name, index) => {
      lineList.push(` ${index+1}. ${name}`) 
    })

    return "The line is currently:"+ lineList
  }
}

