
function takeANumber(deliLine, name){
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    name = deliLine.shift()
    return `Currently serving ${name}.`
  }
}


function currentLine(deliLine){
  var string = ''
  if (deliLine.length === 0){
    string = 'The line is currently empty.'
  } else{
    string = 'The line is currently: '
    for (var i=0; i < deliLine.length; i++){
      string += `${i+1}. ${deliLine[i]}`
      if (i+1 != deliLine.length){
        string += ', '
      }
    }
  }
  return string
}
