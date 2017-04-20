function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line){
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  var name = line.shift()
  return `Currently serving ${name}.`;
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }

  var lineContents = "The line is currently: "
  for (var i = 0; i < line.length; i++){
      lineContents += `${i+1}. ${line[i]}, `
  }
  return lineContents.slice(0,lineContents.length - 2 )
}
