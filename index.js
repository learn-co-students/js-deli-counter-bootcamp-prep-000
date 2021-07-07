var line = []
function takeANumber(line,name) {
  line.push(name)
  var i = line.length
  return `Welcome, ${name}. You are number ${i} in line.`
}
function nowServing(line) {
  if(line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var x = line[0]
    line.shift()
    return `Currently serving ${x}.`
  }
}
function newString(element, index) {
  return `${(index+1)}. ${element}`
}
function currentLine(line) {
  if(line.length > 0) {
    var line2 = line.map(newString)
    return `The line is currently: ${line2.join(', ')}` 
  }
  else {
    return 'The line is currently empty.'
  }
}