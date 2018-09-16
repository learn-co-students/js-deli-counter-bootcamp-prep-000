// var name = ["james", "Ben", "Sekou"]
// var waitingInLine = [];

function currentLine(waitingInLine) {
  if (!waitingInLine.length) {
    return "The line is currently empty."
  }
  var indexLine = []
  var index = 0 
  waitingInLine.forEach(function(name, index) {
      index += 1 
      indexLine.push(`${index}. ${name}`)
    console.log(indexLine)
  })

  return  `The line is currently: ${indexLine.join(', ')}`
}

// TAKE A NUMBER 
function takeANumber(waitingInLine, name) {
  
  waitingInLine.push(name)
   return `Welcome, ${name}. You are number ${waitingInLine.length } in line.`
}

//NOW SERVING 
function nowServing(waitingInLine) {
  
  if(!waitingInLine.length) {
    return "There is nobody waiting to be served!"
      console.log(`The line is currently: ${waitingInLine.shift()}`)
      
  } else {
  return`Currently serving ${waitingInLine.shift()}.`
  }
}


  // takeANumber(waitingInLine, name)
  // nowServing(waitingInLine)
  // currentLine(waitingInLine)

