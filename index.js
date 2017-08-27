function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var place = katzDeliLine.length
  return `Welcome, ${name}. You are number ${place} in line.`
}


function nowServing(deliLine){
  if (deliLine.length ===0) {
    return "There is nobody waiting to be served!"
  } else {
    return(`Currently serving ${deliLine.shift()}.`)
  }
}


function currentLine(deliLine){
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var i = 1
    var inLine = `${i}. ${deliLine.shift()}`
    while(deliLine.length>0){
      ++i
      var inLine = `${inLine}, ${i}. ${deliLine.shift()}`
    }
    return `The line is currently: ${inLine}`
  }
}


/*function currentLine(delLine){
  var total = delLine.length
  for(var i = 0; i<deliLine.length; i++){

  }
  `The line is currently: {}`
}
*/
