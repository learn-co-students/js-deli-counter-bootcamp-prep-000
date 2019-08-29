var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line) {
  if(line.length === 0) return "There is nobody waiting to be served!"
  var customer = ""
  customer = line[0]
  line.shift()
  return `Currently serving ${customer}.`
}

function currentLine(line) {
  if(line.length === 0) return "The line is currently empty."
  var message = "The line is currently: "
  for (let i = 0; i<line.length; i++) {
    if (i < line.length - 1)
      message += `${i + 1}. ${line[i]}, `
    else
      message += `${i + 1}. ${line[i]}`
    }
  return message
}