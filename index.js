katzDeliLine = []

function takeANumber(line, name) {
  line.push(name)
  console.log(`Welcome, ` + name + `. You are number ` + line.length + ` in line.`)
  
  return (`Welcome, ` + name + `. You are number ` + line.length + ` in line.`)
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
   console.log(`There is nobody waiting to be served!`)
   return `There is nobody waiting to be served!`
 }
 else { katzDeliLine.shift
 return `Currently serving ` + katzDeliLine.shift() + `.`
 }
}

function currentLine(line) {
    var deliLine = []
    if (line.length === 0) {
      return `The line is currently empty.`
    } else {
      for(var i = 0; i < line.length; i++) {
        deliLine += (i + 1) + `. ` + line[i] + `, `
      }
      deliLine = deliLine.slice(0, deliLine.length-2)
      return `The line is currently: ` + deliLine
    }
}
 