function takeANumber(currLine, newPerson) {
  currLine.push(newPerson) 
  return `Welcome, ${newPerson}. You are number ${currLine.length} in line.`
}

function nowServing(currLine) {
  if (currLine.length === 0) {
      return "There is nobody waiting to be served!"
  } else {
       for (let i = 0; i < currLine.length; i++) {
         return `Currently serving ${currLine.shift()}.`
    }
  }
}

function currentLine(currLine) {
  let tempCurr = ""
  if (currLine.length === 0) {
    return "The line is currently empty."
  } else {
      for (let i = 0; i < currLine.length; i++) {
        if (i === currLine.length-1) {
          tempCurr += `${i+1}. ${currLine[i]}` 
        } else {
          tempCurr += `${i+1}. ${currLine[i]}, `  
        }
      }
      
  }
  return `The line is currently: ${tempCurr}`
}

