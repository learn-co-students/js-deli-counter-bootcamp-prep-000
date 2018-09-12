function takeANumber(line, name) {
  line.push(name)
  var number = line.length
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstPerson = katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
  else { 
    return "There is nobody waiting to be served!"
    return katzDeliLine[0]
  }
}


function currentLine(line) {
  if (line.length>0) {
    for(var i=0, n=1; i<line.length; i++, n++) {
      line[i] = `${n}. ${line[i]}`
    }
    return `The line is currently: ${line.join(', ')}`
    }
  else {
    return "The line is currently empty."
  }
}