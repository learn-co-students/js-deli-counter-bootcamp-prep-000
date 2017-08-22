function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  for(var i = 0; i<katzDeliLine.length; i++) {
    var string = (`Welcome, ${name}. You are number ${i+1} in line.`)

  }
  return string
}

function nowServing(katzDeliLine) {
  var first = katzDeliLine[0]
    if(katzDeliLine.length == 0){
      return 'There is nobody waiting to be served!'
    }
    else {
      katzDeliLine.shift()
      return (`Currently serving ${first}.`)
    }

}
function currentLine(katzDeliLine) {
  var newString = ""
  if(katzDeliLine.length == 0){
    return 'The line is currently empty.'
  }
  else {
    for(var i=0; i<katzDeliLine.length; i++){
      var string = `${i + 1}. ${katzDeliLine[i]}, `
      newString += string

    }
      return ('The line is currently: ' + newString.slice(0,-2))
  }

}
