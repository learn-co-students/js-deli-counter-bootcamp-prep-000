function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var string = ''
  if (line.length > 0) {
  string = `Currently serving ${line[0]}.`
  line.shift()
  }
  else {
    string = 'There is nobody waiting to be served!'
  }
  return string
}

function currentLine(line) {
  var string = ''
  if (line.length > 0) {
    string = 'The line is currently: '
    for(var i = 0; i < line.length; i ++) {
      string += `${i + 1}. ` + line[i] + ', '
    }
  }
  else {
    return "The line is currently empty."
  }  
  return string.slice(0,string.length-2)
}
