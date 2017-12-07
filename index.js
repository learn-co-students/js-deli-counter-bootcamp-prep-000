var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);

  for(var i = 0; i < katzDeliLine.length; i++){
    if(katzDeliLine[i] === name){
      return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing(katzDeliLine, name){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine.shift(0)
    return `Currently serving ${person}.`
  }
}

function currentLine(line){
  var lineList = 'The line is currently: '

  if(line.length === 0){
    return "The line is currently empty."
  } else {
    for(var i = 0; i < line.length; i++){
      if(line[i] === line[line.length - 1]){
        lineList += i+1 + '. ' + line[i]
      } else {
        lineList += i+1 + '. ' + line[i] + ', '
      }
    }
  }
  return lineList
}
