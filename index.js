function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
  return `There is nobody waiting to be served!`
  }
  else{
  var newName = katzDeliLine[0]
  katzDeliLine.splice(0,1)
  return `Currently serving ${newName}.`
  }
}

function currentLine(line){
  if (line.length === 0) {
  return `The line is currently empty.`
  }
  else{
   while (line.length > 0){
   var i = 1; i++;
   var n = 0; n++;
  }
  return `The line is currently: ${[i]}. ${line[n]}`
  }
}