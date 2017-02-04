
var katzDeli = [];

function takeANumber(line, name){
  if (line.indexOf(name) < 0) {
    line.push(name)
  } else {
    return line.indexOf(name) + 1;
  }
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if ( line.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if ( line.length === 0 ) {
    return "The line is currently empty."
  } else {
    var output = "The line is currently: "

    line.forEach(function (name, index, line) {
      if ( index === line.length - 1) {
        output = output + `${index + 1}. ${name}`
      } else {
        output = output + `${index + 1}. ${name}, `
      }
    })

    return output
  }
}
