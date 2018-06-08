function takeANumber(line, name) {
  for (let counter = 0; counter < line.length; counter++) {
    if(line[counter] === 'name') {
      return `Welcome, ${name}. You are number ${++counter} in line.`
    } 
  } 
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
 }

function nowServing(line) {
  if (line.length > 0) {
    var firstCustomer = line.shift()
  }  else {
    return "There is nobody waiting to be served!" 
  }
  return `Currently serving ${firstCustomer}.`
}

function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var lineWithNumbers = []
    for (let counter = 0; counter < line.length; counter++) {
      lineWithNumbers[counter] = ` ${counter+1}. ${line[counter]}`
    }
    return `The line is currently:${lineWithNumbers}`
  }
}
