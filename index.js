var katzDeliLine = []


function takeANumber(katzDeliLine, newPerson){


  katzDeliLine.push(newPerson)

  var pos = katzDeliLine.length


  return "Welcome, " + newPerson +  ". You are number " + pos + " in line."
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var person = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + person + "."
  }
}


function currentLine(katzDeliLine){

  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }

  var str = "The line is currently: "
  for(var i=0; i<katzDeliLine.length; i++){
      str += i+1 + ". " + katzDeliLine[i] + ", "
  }
  str = str.substring(0, str.length - 2);
  return str
}
