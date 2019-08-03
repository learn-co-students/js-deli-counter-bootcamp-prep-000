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
   var i = 0;
   while (line.length > 0){
   line.unshift([i]);
   i++
  }
  return `The line is currently: ${i}. ${line[i]}`
  }
}