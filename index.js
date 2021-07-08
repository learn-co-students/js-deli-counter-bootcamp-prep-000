function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name +". You are number " + katzDeliLine.length +" in line."
}

function nowServing(katzDeliLine){
  var guestBeingServed = ""
  if (katzDeliLine.length >0){

    guestBeingServed=katzDeliLine.shift()
    return "Currently serving " + guestBeingServed +"."
  }else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line){
  var str = ""
  if (line.length==0){
    return "The line is currently empty."
  }else {
    for (var i=0; i<line.length; i++){
      str += i+1 + ". "+line[i]+ (i === line.length-1 ? '' : ', ')
    }
    return "The line is currently: "+ str;
  }
}
