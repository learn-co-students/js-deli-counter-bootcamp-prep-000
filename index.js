var katzDeli = new Array()
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var positionInLine = katzDeliLine.indexOf(name) + 1
  return 'Welcome, '  + name + '. You are number ' + positionInLine + ' in line.'
}

function nowServing(otherDeli){
  if (otherDeli.length == 0){
    return 'There is nobody waiting to be served!'
  }
  else {
    var currentlyServing = otherDeli[0]
    otherDeli.shift()
    return 'Currently serving ' + currentlyServing + '.';
  }
}

function currentLine(katzDeli){
  if (katzDeli.length == 0) {
    return `The line is currently empty.`
  }
  else {
    var arrayLine = new Array()
    for (let i = 0; i < katzDeli.length; i++){
      var positionInLine = i + 1
      var name = katzDeli[i]
      arrayLine.push(` ${positionInLine}. ${name}`)
    }
  }
  return "The line is currently:" + arrayLine
}
