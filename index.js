//var katzDeliLine = [];

function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
} 

function nowServing(katzDeliLine) {
  let firstPerson
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
     firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    
  }
  return `Currently serving ${firstPerson}.`
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return "The line is currently empty."
  }
  let string = "The line is currently:"
  
  for(var i = 1; i < currentLine.length+1; i++) {
    string = string + " " + i + ". " + currentLine[i-1] + ",";
  }
  string = string.slice(0, string.length - 1, ".")
  return string 
}