function takeANumber (line, customername) {
  line.push(customername);
  var position = line.length
  return (`Welcome, ${customername}. You are number ${position} in line.`)
}

function nowServing (line) {
  if (line.length > 0) {
    var customer = line[0];
    line.shift()
    return `Currently serving ${customer}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

//initial attempt

/*function currentLine (line) {
  if (line.length > 0) {
    var message = []
    for (var j = 0; j < (line.length); j++) {
      if(j === (line.length-1)) {
        var lineadd1 = (`${j+1}. ${line[j]}`)
        message.push(lineadd1)
      } 
      if (j < (line.length-1)) {
      var lineadd2 = (`${j+1}. ${line[j]}, `)
      message.push(lineadd2)
      }
    } return "The line is currently: " + message
  } else return "The line is currently empty."
}*/

function currentLine (line) {
  if (line.length > 0) {
    var message = []
    for (var j = 0; j < (line.length); j++) {
      var lineadd1 = (`${j+1}. ${line[j]}`)
      message.push(lineadd1)
    } return "The line is currently: " + message.join(", ")
  } else return "The line is currently empty."
}
