var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  while (katzDeliLine.length > 0){
    var string = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return string
  }
  return "There is nobody waiting to be served!"
}


//Still broken
/*function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    var i = 0
    var array = ["The line is currently : "]
    while (i < katzDeliLine.length && i >= 0){
      array.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    for (i; i < array.length; i++)
    return array[i]
  }
  else {
    return "The line is currently empty."
  }
}*/

/*function currentLine(line){
  var lineString = `The line is currently: `
  for (var i = 0; i === line.length - 1; i++){
    lineString = lineString + `${i + 1}. ${line[i]}`
  }
  return lineString
}*/

function currentLine(line){
  if (line.length > 0){
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  }
  else{
    return "The line is currently empty."
  }
}
