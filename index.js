var katzDeliLine = []

function takeANumber(line, newCust){
  line.push(newCust)
    return `Welcome, ${newCust}. You are number ${line.length} in line.`
}


function currentLine(line){
  if (line.length > 0){
    var counter = 0
    while (counter < line.length ){
      if (counter === 0){
        var output = `The line is currently: ${counter+1}. ${line[counter]}`
      }
      else {
        output += `, ${counter+1}. ${line[counter]}`
      }
      counter++
    }
    return output
  }
  else {return "The line is currently empty."}
}


function nowServing(line){
  if (line.length > 0){
    return `Currently serving ${line.shift()}.`
  }
  else {return "There is nobody waiting to be served!"}
}
