function takeANumber(currentLine,name){
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}
function nowServing(currentLine) {
  var temp = currentLine.shift()
  if(currentLine.length > 0){
  return `Currently serving ${temp}.`}
  else
  return "There is nobody waiting to be served!"
}
function currentLine(line) {
  if(line.length > 0){
    var returnString = "The line is currently:"
    for(let i = 0;i < line.length; i++){
      returnString = returnString + ` ${i+1}. ${line[i]},`
    }
    returnString = returnString.slice(0, returnString.length-1)
    return returnString
  }else
  return "The line is currently empty."
}