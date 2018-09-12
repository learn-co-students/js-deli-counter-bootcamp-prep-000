function takeANumber (array, name) {
  array.push(name);
  return String ("Welcome, " + name + ". You are number " + (array.length) + " in line.");
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }else{
      return String ("There is nobody waiting to be served!");
  }
}

function currentLine (line) {
  if (!line.length) {
      return "The line is currently empty."
  }
  
  var newArray = []
  
  for (let i = 0; line.length > i; i++) {
    newArray.push(`${i + 1}. ${line[i]}`)
  }
  
  return `The line is currently: ${newArray.join(', ')}`
}


