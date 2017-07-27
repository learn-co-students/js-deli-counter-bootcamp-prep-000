var katzDeliLine = [];

var takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = function(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

var currentLine = function(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var foo = []
    for(var i = 0; i < katzDeliLine.length; i ++) {
      foo.push(` ${i+1}. ${katzDeliLine[i]}`) //annoying spacing requirements to pass
    }
    return 'The line is currently:' + `${foo}`
  }
  else {
    return 'The line is currently empty.'
  }
}
