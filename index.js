function takeANumber(line, customer){
  line.push(customer)
  var msg = (`Welcome, ${customer}. You are number ${line.length} in line.`)
  return (msg)
}

function nowServing(line){
  var msg = ""
  if (line.length>0){
      msg = "Currently serving " + line[0] + "."
      line.shift()
  } else {
    msg = "There is nobody waiting to be served!"
  }
  return (msg)
}

function currentLine(line){
  var msg = ""
  if (line.length>0){
    msg = "The line is currently: "
    for(var i=0;i<line.length;i++){
      msg = msg + (i+1) + ". " + line[i]
      if (i != line.length-1){
        msg = msg + ", "
      }
    }
  } else {
    msg = "The line is currently empty."
  }
  return (msg)
}
