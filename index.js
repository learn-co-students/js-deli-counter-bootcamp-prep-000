var katzDeliLine = []

function takeANumber(line, newCust){
  line.push(newCust)
    return `Welcome, ${newCust}. You are number ${line.length} in line.`
}

//v2
function currentLine(line){
  if (line.length > 0){
    var output = `The line is currently: 1. ${line[0]}`
      for (var i = 1; i < line.length; i++){
          output += `, ${i+1}. ${line[i]}`
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
