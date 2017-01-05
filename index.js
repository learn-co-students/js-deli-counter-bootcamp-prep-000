function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var currentCustomer = line[0]
    line.shift()
    return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
} else {
  var peopleWaiting = []
  let n = 0
    while(line.length > 0){
      n++
      peopleWaiting.push(` ${n}. ${line[0]}`)
      line.shift()
    }
  return `The line is currently:${peopleWaiting}`
  }
}
