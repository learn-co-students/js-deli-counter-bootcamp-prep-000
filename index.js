function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine
}

function currentLine(line) {
  if (line.length > 0) {
    var newArray = []
    for (var i = 0; i < line.length; i++) {
      // 1. Bill
      newArray.push(`${i + 1}. ${line[i]}`)
    }
    // newArray's value is ['1. Bill', '2. Jane', '3. Ann']
    return `The line is currently: ${newArray.join(", ")}`
  } else {
    return "The line is currently empty."
  }
}
