function takeANumber(line, name) {
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
  
}

function nowServing(line) {

  if(line.length === 0) {
    return ("There is nobody waiting to be served!")
  }
  else {
    var name = line.shift()
    return (`Currently serving ${name}.`)
  }
  
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var str = "The line is currently: "
    for(var i = 0; i < line.length; i++) {
      str = str + (i+1) + ". " + line[i] + (i<line.length-1 ? ', ' : '');
    }
    console.log(str)
    return str
  }
}