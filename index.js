var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    let nextCustomer = line[0]
    line.shift()
    return "Currently serving " + nextCustomer + "."
  }
}

function currentLine(line) {
  let lineString = "The line is currently: "
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
      if (line.length === i + 1) {
      lineString += (i+1) +". " + line[i]
    } else {
      lineString += (i+1) +". " + line[i] + ", "
      }
    }
  }
  return lineString
}
