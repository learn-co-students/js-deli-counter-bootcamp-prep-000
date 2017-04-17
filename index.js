var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
    var sentence = `The line is currently: `
    for (var i = 0; i < katzDeliLine.length; i++) {
      sentence += (`${i+1}. ${katzDeliLine[i]}, `)
    }
    return sentence.slice(0,-2)
  }
}