//let katzDeliLine = ['Ada', 'Grace', 'Ezra']

function welcomeNumber {
  if (katzDeliLine.length)
}

// // #1 takeANumber
// //unclear if should mutate/destroy the "current line of peopl" = katzDeliLine. set it to mutate.
//
function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return(`Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson)+1} in line.`)
}

let number = 1
function takeANumberIncrementUp () {
  katzDeliLine.push(number)
  return (`Welcome # ${number} on line!`)
  number ++
}

// takeANumber(['Ada', 'Grace'],'Ezra')
//

// // #2 nowServing
//
function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
  return(`Currently serving ${katzDeliLine.shift()}.`)
  } else {
  return('There is nobody waiting to be served!')
  }
}
//
// nowServing (['Ada', 'Grace', 'Ezra'])

// // nowServing (['Ada', 'Grace', 'Ezra'])

// // how to set it up to return when line is empty? getting error "TypeError: Cannot read property 'length' of undefined at nowServing"

// // #3 currentLine
//
function currentLine(katzDeliLine) {
let str = 'The line is currently:'
  if (katzDeliLine.length) {
    for (let i=0;i<katzDeliLine.length; i++) {
   str += ` ${i+1}. ${katzDeliLine[i]},`
    } return str.slice(0,-1)

  } else {
  return('The line is currently empty.')
  }
}
//
// // currentLine([])
