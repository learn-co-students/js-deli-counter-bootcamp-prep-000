function takeANumber(lineCount, custName) {
  lineCount.push(custName)
  return `Welcome, ${custName}. You are number ${lineCount.length} in line.`
}


function currentLine(line) {
  var returnString = 'The line is currently: '
  if(line.length === 0){
    return 'The line is currently empty.'
  }else {
    for (var i = 0; i < line.length; i++) {
      if(i === (line.length - 1)){
        returnString += `${i + 1}. ${line[i]}`
      }else {
        returnString += `${i + 1}. ${line[i]}, `
      }

    }
  }

  return returnString
}

function nowServing(line) {
  if(line.length === 0){
    return 'There is nobody waiting to be served!'
  }else{
    return 'Currently serving ' + line.shift() + '.'
  }
}
