var katzDeliLine = [];

function takeANumber (line, name) {
  var num = line.length +1;
  line[line.length] = name;
  return `Welcome, ${name}. You are number ${num} in line.`
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
console.log(`${text}`)
    }
  }
  return text
}

function nowServing (line) {
  var text = `Currently serving ${line[0]}.`;
  if (line.length === 0) {
    text = "There is nobody waiting to be served!"
  } else {
    for (let i=0; i < line.length; i++) {
      line[i] = line[i+1]
    }
    line.length--
  }
  return text
}
