var i = 0
function giveANumber(katzDeliLine) {
  i = i + 1
  katzDeliLine.push(i)
  return `You are number ${i} in line!`
}


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  var newPerson = deliLine.shift()
  if  (deliLine.length > 0) {
    return `Currently serving ${newPerson}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lines = ''
    for ( var i = 0; i < line.length ; i++) {
      if (i < line.length -1){
        var lineOrder = `${i + 1}. ${line[i]}, `
      }
      else { 
        var lineOrder = `${i + 1}. ${line[i]}`
      }
      lines = lines + lineOrder
}  return (`The line is currently: ${lines}`)
}
else {
  return "The line is currently empty."
  }
}

