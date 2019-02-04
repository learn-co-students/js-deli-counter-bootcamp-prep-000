

// Take a number and set user place in line


function takeANumber (katzDeli,name){
  katzDeli.push(name);
  var position = katzDeli.length
  var message = `Welcome, ${name}. You are number ${position} in line.`
  return message
}


function nowServing (deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var toBeServed = deliLine[0]
    deliLine.shift()
    return `Currently serving ${toBeServed}.`
  }
}

function currentLine (line) {
  if (line.length === 0){
    return "The line is currently empty."
  } else {
      var i=0
      message = "The line is currently:"
      for (i=0; i < line.length; i++){
        if (i+1 === line.length) {
          var message = `${message} ${i+1}. ${line[i]}`
        } else {
          var message = `${message} ${i+1}. ${line[i]},`
        }

    } return message

  }
}
