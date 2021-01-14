function takeANumber(line,name){
  line.push(name)
  let lineNum= line.length
  var message = (`Welcome, ${name}. You are number ${lineNum} in line.`)
  return message
}

function nowServing(line){
  var next =  line.shift()
  if (typeof(next) === 'string'){
    return `Currently serving ${next}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line) {
  var message = "The line is currently:"
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    let num = 1
    while (num < line.length){
      line.push(`${num}. ${name}`)
    }
  }
}