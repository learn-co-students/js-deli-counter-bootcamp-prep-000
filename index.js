var katzDeli= []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  let n = katzDeliLine.length
  return `Welcome, ${name}. You are number ${n} in line.`
}

function nowServing(katzDeliLine) {
  var message = ''
  let x = katzDeliLine.length
  if (x > 0) {
    var first = katzDeliLine[0]
    katzDeliLine.splice(0,1)
    message = `Currently serving ${first}.`
  } else {
    message = 'There is nobody waiting to be served!'
  } return message
}

function currentLine(katzDeliLine) {
  let b = katzDeliLine.length
  var position = []
  if (b > 0) {
    for (let i = 0; i < b; i++) {
      position.push(` `+[i + 1] +`. ` + katzDeliLine[i])
      var text = `The line is currently:` + position
    }
  } else {
    var text = "The line is currently empty."
  } return text
}
