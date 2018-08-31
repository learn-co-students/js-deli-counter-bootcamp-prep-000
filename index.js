var deliLine = []
var lineNum

function takeANumber(deliLine, name){
  deliLine.push(name)
  var numLine = deliLine.length
  return `Welcome, ${name}. You are number ${numLine} in line.`
}

function nowServing(deliLine){
  var person
  if (deliLine.length > 0){
    person = deliLine.shift()
    return `Currently serving ${person}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine){
  var line = "The line is currently: "
  if (deliLine.length > 0){
    for (let i = 0; i<deliLine.length; i++){
      if (i === 0){
        line = line + `1. ${deliLine[i]}`
      }else{
        lineNum = i + 1
        line = line + `, ${lineNum}. ${deliLine[i]}`
      }
    }
    return line
  } else {
    return "The line is currently empty."
  }
}