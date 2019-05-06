function takeANumber (line, customer){
  line.push(customer)
  var placeInLine = line.indexOf(customer, 0) + 1
  return "Welcome, " + customer  + ". You are number " + placeInLine + " in line."
}

function nowServing(line) {
  var firstInLine = []
  if (line.length === 0) 
  {var response = "There is nobody waiting to be served!"} else
  {firstInLine.unshift(line[0])
    response = "Currently serving " + firstInLine[0] +"."
    line.shift()}
    return response}
  
function currentLine(line) 
{var theLineNumbered = []
  if (line.length === 0) 
  {var inLine = "The line is currently empty."}
  else {
    for (var i = 0; i < line.length; i++) {
      var placeInLine = i + 1
    theLineNumbered.push(" "+ placeInLine + ". " + line[i])
    inLine = "The line is currently:" + theLineNumbered.toString()}
  }
  return inLine
}