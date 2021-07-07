function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if ( array.length > 0 ) {
    return `Currently serving ${array.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
    var current = "The line is currently: "
    var i = 0

    if ( line.length == 0) {
      return 'The line is currently empty.'

    } else {
      while (i < line.length) {
        current += `${i+1}. ${line[i]}`

        if ( i < line.length - 1) {
          current += ', '
        }

        i++
      }
    }

  return current
}
