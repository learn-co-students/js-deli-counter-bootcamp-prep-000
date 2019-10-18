function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var length = katzDeliLine.length
  return `Welcome, ${name}. You are number ${length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var statement = "The line is currently: "
    //iteration and interpolation to concatenate string statment
    for (var i = 0; i < line.length; i++) {
      //corner case: don't put a comma after the last name
      if (i === line.length - 1) {
        statement += `${i + 1}. ${line[i]}`
      }
      else {
        statement += `${i + 1}. ${line[i]}, `
      }
    }
    return statement
  }
}