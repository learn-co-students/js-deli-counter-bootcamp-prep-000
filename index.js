var katzDeli = [];

function takeANumber(katzDeliLine, newName){
  // katzDeli.push(katzDeliLine)
  katzDeliLine.push(newName)
  katzDeli.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine){
  if (!(deliLine.length)){
    return "There is nobody waiting to be served!"
  } else {
    var name = deliLine.splice(0,1)
    return `Currently serving ${name}.`
  }
}

function currentLine(line){
  if (!(line.length)){
    return "The line is currently empty."
  }

  var beginning = "The line is currently:"

  for (var i=0; i<line.length-1; i++){
    beginning += ` ${i+1}. ${line[i]},`
  }
   beginning += ` ${line.length}. ${line[line.length-1]}`

  return beginning;
}
