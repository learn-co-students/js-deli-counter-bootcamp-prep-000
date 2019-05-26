function takeANumber (katzDeliLine, name) {
  katzDeliLine.push (name)
  return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length) + ' in line.'
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
    //return ends the function. anything after does not happen
    //katzDeliLine.shift has to be added in such a way that the console returns the current value (above)
    //but also then performs the action
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine (katzDeliLine) {
  var placeInLine = [];

  if (katzDeliLine.length > 0){
    var i = 0
    while (i < katzDeliLine.length){
    placeInLine.push ( ` ${katzDeliLine.indexOf(katzDeliLine[i])+1}. ${katzDeliLine[i]}`)
    ++i

  } return `The line is currently:${placeInLine}`
  } else{
    return `The line is currently empty.`
  }
}
