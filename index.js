var katzDeli = []

function takeANumber (deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if (!deliLine.length){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

takeANumber(katzDeli, "Denali")
nowServing(katzDeli)

function currentLine(deliLine){
  var line = []
  for(var i=0; i < deliLine.length; i++){
    line.push(`${i+1}. ${deliLine[i]}`)
  }
  if (!line.length){
    return "The line is currently empty."
  } else {
    return `The line is currently: ${line.join(', ')}`;
  }
}
