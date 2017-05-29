function takeANumber(jennDeliLine, name) {
  jennDeliLine.push(name)
  return `Welcome, ${name}. You are number ${jennDeliLine.length} in line.`
};

function nowServing(jennDeliLine, name) {
  if (jennDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${jennDeliLine.shift(name)}.`
  }
};

function currentLine(jennDeliLine) {
  let numInLine = []
  if (jennDeliLine.length == 0) {
    return 'The line is currently empty.'
  }
  else {
    
    for (let i = 0; i < jennDeliLine.length; i++) {
      numInLine.push(` ${i + 1}. ${jennDeliLine[i]}`)
    }
  }
    return `The line is currently:${numInLine}`  
};
