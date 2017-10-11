function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var index = katzDeliLine.indexOf(name)
  return 'Welcome, '+name+'. You are number '+parseInt(index+1)+' in line.'
}
function nowServing (katzDeliLine) {
  if (katzDeliLine.length>0) {
    var next = katzDeliLine[0]
    katzDeliLine.shift();
    return 'Currently serving '+next+'.'

  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  var array = []
    if (line.length>0) {
      for (var i=0;i<line.length;i++) {
        array.push(' '+(i+1)+'. '+line[i])
      }
      return 'The line is currently:'+array
    } else {
      return 'The line is currently empty.'
    }

}
