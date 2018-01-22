var katzDeli = [];
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    
      console.log("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.")  

  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!" 
  }
  if (line.length > 0) {
    var now = line[0];
    line.shift()
  return "Currently serving " + now + "."
  }
}

function currentLine(line) {
  var lineString = "";
  if (line.length === 0) {
    return "The line is currently empty."
  }
  for (let i=0; i< line.length; i++) {
    if (i>0) {lineString += ", "}
    lineString += (i+1) + ". " + line[i] ;
  }
  return "The line is currently: " + lineString 
}