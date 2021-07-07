function takeANumber(line, name){
  //accepts current line of people, var katzDeliLine
  //also accepts name of person taking a Number
  //must return index + 1 place in line to customer
  //ex. 'Welcome, Ada. You are number 1 in line.'
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  //return first person in line and remove that individual from line
  // if nobody in line return "There is nobody waiting to be served!"
  // 'Currently serving Ada.''
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  // returns current line
  //"The line is currently: 1. Ada, 2. Grace"
  // if no one "The line is currently empty"
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var message = `The line is currently: 1. ${line[0]}`
    for (var i = 1; i < line.length; i++) {
      message += `, ${i + 1}. ${line[i]}`
    }
    return message
  }
}