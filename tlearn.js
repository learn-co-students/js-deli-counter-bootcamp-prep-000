var katzDeliLine = []

/*

function takeANumber(katzDeliLine, name) {
  
  var i = 0
  
  do {
    katzDeliLine.push(name)
    console.log(`Welcome, ${katzDeliLine[i]}. You are number ${i + 1} in line.`)
    i += 1
  } while (i > katzDeliLine.length)
  
}


function takeANumber(katzDeliLine, name) {
  var i = 0
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(name)
  } return console.log(`Welcome, ${katzDeliLine[i]}. You are number ${katzDeliLine.length} in line.`)
}


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length - 1} in line.`)
  return katzDeliLine
}

takeANumber(katzDeliLine, "Aga")
takeANumber(katzDeliLine, "Pawel")

*/

var line = ["A", "B", "C", "D", "E"]

for (var i = 0; i < line.length; i++) {
  console.log(`${i + 1}. ${line[i]}`)
}


function currentLine(line) {
  if (line.length > 0) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  } else {
    return "The line is currently empty."
  }
}
