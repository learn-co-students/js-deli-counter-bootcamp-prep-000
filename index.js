function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  let position = katzDeliLine.length
  
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0)
    return 'There is nobody waiting to be served!'
  else
    var nextInLine = katzDeliLine.shift()
    return `Currently serving ${nextInLine}.`
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0)
    return 'The line is currently empty.'
  else
    var line = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++)
      if (i === 0 )
        line = line + `${i + 1}. ${katzDeliLine[i]}`
      else
        line = line + `, ${i + 1}. ${katzDeliLine[i]}`
    return line
}