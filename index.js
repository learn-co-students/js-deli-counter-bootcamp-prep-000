var lineArray = []

function takeANumber (lineArray,name) {
  lineArray.push(name)
  return `Welcome, ${name}. You are number `+lineArray.length + ` in line.`
  //lineArray.indexOf(name)+1
}

function nowServing (lineArray) {
  if (lineArray.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var firstPerson = lineArray.shift()
    return "Currently serving " + firstPerson+"."
  }
}

function currentLine(currentLine) {
  if (currentLine.length == 0) {
    return "The line is currently empty."
  }
  var temp = "The line is currently: "
  for (let i = 0; i < currentLine.length; i++) {
    temp+=i+1+". "+currentLine[i]
    if (i!=currentLine.length-1)
    temp +=", "
  }
  return temp
}
