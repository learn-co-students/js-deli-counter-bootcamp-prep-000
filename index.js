function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ` + name + `. You are number ` + line.length + ` in line.`
}

function nowServing(cline) {
  if (cline.length === 0){
    return `There is nobody waiting to be served!`
  } else {
    var first = cline.shift()
    return `Currently serving ` + first + `.`
  }
}

function currentLine(line) {
  if (line.length === 0){
    return 'The line is currently empty.'
  }

  var output = `The line is currently: `
  for (var i = 0; i < line.length; i++){
    var num = i + 1
    output += num
    output += `. `
    output += line[i]
    if (i < line.length - 1){
      output += `, `
    }
  }
  return output
}
