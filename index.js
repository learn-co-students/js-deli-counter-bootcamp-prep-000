function takeANumber(katzDeli, name) {
  
    katzDeli.push(name)
  
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`
    //deliLine.shift()}
  }
    else {
      return "There is nobody waiting to be served!"
}
  //deliLine.shift()
  //return deliLine
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  const numbersAndNames = []
  
    for (let i = 0; i < line.length; i++) {
      numbersAndNames.push(`${i + 1}. ${line[i]}`)
    }
  
    return `The line is currently: ${numbersAndNames.join(', ')}`
  };
  
    //return `The line is currently: ${katzDeliLine}.`
    /*var namesAndNumbers = []
    for (let i = 0; i >= line.length; i++) {
      namesAndNumbers.push(`${i + 1}. ${line}`)
    }
    return `The line is currently: ${namesAndNumbers}`
  //}
}*/