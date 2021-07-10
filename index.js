function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number '+ (katzDeliLine.length) + ' in line.'

}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var result = 'Currently serving ' + katzDeliLine[0] +'.'
    katzDeliLine.shift()
    return result
  }
  else
    return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  var result = ""
  if(katzDeliLine.length > 0){
    result = "The line is currently: "
    var i = 0
    while(i < katzDeliLine.length){
      var name = katzDeliLine[i]
      result += (i+1) +'. ' + name
      if(i != katzDeliLine.length - 1)
        result += ', '
      i+=1
    }
  }
  else {
    result = "The line is currently empty."
  }
  return result
}
