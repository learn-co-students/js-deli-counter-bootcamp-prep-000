function takeANumber(line, name) {
  var lineNumber = line.length + 1
  line.push(name)
  line = ("Welcome, " + name + ". You are number " + lineNumber + " in line.")
  return line

}


function nowServing(line,name){
  name = line[0]
  if(line.length === 0){
    var line = "There is nobody waiting to be served!"
  }else{
    line = "Currently serving " + line.shift() + "."
  }
  return line
}

function currentLine(line,name){
  var returnLine
  name = line[0]
  if(line.length ===0){
    returnLine = "The line is currently empty."
  }else{
    returnLine = "The line is currently: 1. "+line[0] +", 2. "+line[1]+ ", 3. "+line[2]
  }
  return returnLine
}
