
var katzDeliLine = [];

function takeANumber (deliLine, name) {
  deliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${deliLine.length} in line.`)

  return `Welcome, ${name}. You are number ${deliLine.length} in line.`

} //end of takeANumber function

function nowServing (deliLine) {
  if(deliLine.length > 0) {
    console.log(`Currently serving ${deliLine[0]}`)

    let currentlyServe = [...deliLine]
    deliLine.shift()

    return `Currently serving ${currentlyServe[0]}.`

  } else {
    console.log("There is nobody waiting to be served!")

    return "There is nobody waiting to be served!"
  }

} //end of nowServing function

function currentLine(deliLine) {
  var lineIs = []

  if(deliLine.length > 0) {
    for(let i = 0; i < deliLine.length; i++) {
      lineIs.push(` ${i + 1}. ${deliLine[i]}`)

        }

    console.log(`The line is currently:${lineIs}`)

    return `The line is currently:${lineIs}`

    } else {
    console.log('The line is currently empty.')

    return 'The line is currently empty.'

  }



  return `The line is currently:${lineIs}`

} //end of currentLine function

takeANumber(katzDeliLine, 'Ava') //add

takeANumber(katzDeliLine, 'Ray') //add

nowServing(katzDeliLine) //remove

nowServing(katzDeliLine) //remove

nowServing(katzDeliLine) //check empty queue

takeANumber(katzDeliLine, 'Maura') //add

takeANumber(katzDeliLine, 'Lilo') //add

currentLine(katzDeliLine) // check current line

nowServing(katzDeliLine) //remove

nowServing(katzDeliLine) //remove

nowServing(katzDeliLine) //check empty queue

currentLine(katzDeliLine) //check cuurent line
