function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    var person = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
}
function currentLine(katzDeliLine){
  var output = 'The line is currently: '
  if (katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  else{
    for (var i = 0; i < katzDeliLine.length-1;i++){
      output = output + (i+1) + '. ' + katzDeliLine[i] + ', '
    
    }
    output = output + (i+1) + '. ' + katzDeliLine[i]
      return output
  }
}