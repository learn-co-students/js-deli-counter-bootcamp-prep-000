
var katzDeli = [];

function takeANumber(line, customer) {
  line.push(customer)
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var announce = "The line is currently: "
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
      announce = announce + `${i + 1}. ${line[i]}, `
    }
  }
  return announce.substring(0, announce.length - 2)
}
