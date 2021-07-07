function takeANumber(currentLine, newName) {
  
  currentLine.push(newName)
  let whereInLine = currentLine.length
  return `Welcome, ${newName}. You are number ${whereInLine} in line.` 
}



// function nowServing(katzDeliLine) {
//   if (katzDeliLine.length < 1) {
//     return 'There is nobody waiting to be served!'
//   }
//   katzDeliLine.shift()
//   return `Currently serving ${katzDeliLine[0]}.`
// }

// function nowServing(katzDeliLine) {
//   if (katzDeliLine.length < 1) {
//     return 'There is nobody waiting to be served!'
//   }
//   let removedElement = katzDeliLine.shift()
//   return removedElement
// }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!'
  }
  var removedElement = katzDeliLine.shift()
  return 'Currently serving ' + removedElement + '.'
}



function currentLine(currentLineOfPeople) {
  if (currentLineOfPeople.length < 1) {
    return 'The line is currently empty.'
  }
  
const numberAndName = []
for (let i = 0; i < currentLineOfPeople.length; i++) {
  numberAndName.push(` ${i + 1}. ${currentLineOfPeople[i]}`)
  }
  return `The line is currently:${numberAndName}`
}
