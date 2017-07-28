function takeANumber(katzDeliLine, name) {
  var result = 99
  katzDeliLine.push(name)
  for (var i = 0; i < katzDeliLine.length; i++) {
    if(katzDeliLine[i]==name){
      result = i+1
    }
}
return `Welcome, ${name}. You are number ${result} in line.`
}

function nowServing(katzDeliLine) {
    if(katzDeliLine.length==0){
      return "There is nobody waiting to be served!"
    } else{
      var result = katzDeliLine.shift()
    }
return `Currently serving ${result}.`
}

function currentLine(katzDeliLine) {
  var result = "The line is currently: "
  if(katzDeliLine.length==0){
    return "The line is currently empty."
  } else{
    for (var i = 0; i < katzDeliLine.length; i++) {
      if(i<katzDeliLine.length-1){
        result += i+1 + ". " + katzDeliLine[i] + ", "
    } else {
      result += i+1 + ". " + katzDeliLine[i]
    }
    }
  }
  return result
}
