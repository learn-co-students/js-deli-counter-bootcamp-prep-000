var katzDeliLine = [];

function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function currentLine (line) {
  var num = 0
  var punct = ", "
  var text = "The line is currently: "
  if (line.length ===  0) {
    text = "The line is currently empty."
  } else {
    for (let i=0; i<line.length; i++) {
      num = i + 1
      if (num === line.length) {
        punct = ""
      }
      text += `${num}. ${line[i]}${punct}`
    }
  }
  return text
}

function nowServing (line) {
  var text = `Currently serving ${line[0]}.`;
  if (line.length === 0) {
    text = "There is nobody waiting to be served!"
  } else {
    text = `Currently serving ${line.shift()}.`
  }
  return text
}
