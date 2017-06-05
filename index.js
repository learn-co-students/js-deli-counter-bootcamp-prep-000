function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {

  var message = "The line is currently: "

  for (let i=0;i<line.length;i++) {
      message +=`${i+1}. ${line[i]}, `
    } 
    var newLine = message.slice(0,-2)
  }
  return newLine
}


function nowServing(line) {
  var name = line[0]
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    line.shift()
    return `Currently serving ${name}.`
  }
}


function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}