function takeANumber(deliLine, customerName) {
  deliLine.push(customerName)
   return `Welcome, ${customerName}. You are number ${deliLine.length} in line.`
}


function nowServing(line) {
  if (line.length>0) {
    return "Currently serving " + line.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(line) {

  var status = "The line is currently: "

  if (line.length>0) {
    for (var i = 0; i < line.length; i++) {
        status += i+1 + ". " + line[i]

        if (i < line.length-1) {
          status += ", "
        }
    }
    return status
  } else {
    return "The line is currently empty."
  }
}
