function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  var name
    if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  name = katzDeliLine.shift()
  return "Currently serving " + name + "."
}






function currentLine(katzDeliLine) {
  var lineNum = ""
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (i != katzDeliLine.length - 1) {
      lineNum += `${i + 1}. ${katzDeliLine[i]}, `
    } else
      lineNum += `${i + 1}. ${katzDeliLine[i]}`
  }
  return `The line is currently: ${lineNum}`
}




/*expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");*/







