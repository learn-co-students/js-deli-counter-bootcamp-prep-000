var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine, name){
  var removedPerson = []
  removedPerson.push(`${katzDeliLine[0]}`)
  katzDeliLine.shift(`${name}`)
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
}   return `Currently serving ${removedPerson[0]}.`
}

function currentLine(katzDeliLine){
var newArray = []
for(let i = 1; i <= katzDeliLine.length; i++){
newArray.push(` ${i}. ${katzDeliLine[i - 1]}`)
}if(katzDeliLine.length === 0) {
      return "The line is currently empty."
    }
return `The line is currently:${newArray}`
}
