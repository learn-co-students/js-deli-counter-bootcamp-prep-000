function takeANumber(lineArray, name){
  lineArray.push(name)
  var number = lineArray.length
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var serving = line.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(line){
  var returnString = "The line is currently:"
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < line.length; i++){
      var num = i + 1
      returnString += ` ${num}. ${line[i]},`
    }
    returnString = returnString.slice(0, -1)
    return returnString
  }
}
