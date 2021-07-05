var katzDeliLine = []

function takeANumber(line, name) { 
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`
}

function nowServing(line) {
   if (line.length === 0) {
    return "There is nobody waiting to be served!"
    
  }
  return `Currently serving ${line.splice(0,1)}.`
 
}

function currentLine(names){
  if (names.length === 0) {
    return "The line is currently empty."
  }
  
  var nameList = "The line is currently: "

  for (var i= 0; i < names.length; i++) {
    nameList += `${i+1}. ${names[i]}`
    if (i !== names.length - 1) {
      nameList += ", "
    }
  } 
  return nameList
}