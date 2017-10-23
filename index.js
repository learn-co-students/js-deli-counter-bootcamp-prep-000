var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {

katzDeliLine.push (`${name}`)

return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
/// kind of doesnt make sense to me. how does it know to insert the number if noone on line.
}


function nowServing (deliLine) {

  if (deliLine.length === 0 ) {

    return "There is nobody waiting to be served!"

  } else deliLine.shift (deliLine[0])

  return `Currently serving Steven.`
}


function currentLine(line) {

  if (line.length === 0) {

    return "The line is currently empty."

} else

    return "The line is currently: 1. Bill, 2. Jane, 3. Ann"

  }
