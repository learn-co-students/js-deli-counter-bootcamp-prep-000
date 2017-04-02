var deli = [];

function takeANumber(line, newPerson){
  line.push(`${newPerson}`)
  var number = `Welcome, ${newPerson}. You are number ${line.length} in line.`
  return(number)
}

function nowServing(line){
  if(line.length > 0) {
    var name = line[0]
  line.shift()
  return(`Currently serving ${name}.`)
} else {
  return(`There is nobody waiting to be served!`)
}
}

var hello = []

function currentLine(line){
  if (line.length > 0){
    var i = 0
    while (i < line.length) {
      hello.push(` ${i+1}. ${line[i]}`)
      i++
    } return(`The line is currently:${hello}`)
  } else {
    return (`The line is currently empty.`)
  }
}
