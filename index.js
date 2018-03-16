
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }


function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
  var firstPerson =  deliLine.shift()
  return  `Currently serving ${firstPerson}.`
  }
}
//["Ada", "Grace"]

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {

    var status = 'The line is currently: '
    for ( var position = 1; position < line.length + 1; position++) {

      if (position === line.length) {
        status = status + `${position}. ${line[position - 1]}`
      } else {
        status = status + `${position}. ${line[position - 1]}, `
      }
  }
  return status
}
}
