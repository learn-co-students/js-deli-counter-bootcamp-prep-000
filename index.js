function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, "+ name + ". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    var served = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + served+"."
  }

}

function currentLine(katzDeliLine){
  var string = "The line is currently"
  if(katzDeliLine.length == 0){
    return string = string + " empty."
  }else{
    string = string +": "
    for(let i = 0; i<katzDeliLine.length;i++){
      var counter = i+1
      //string = string + counter + ". "+katzDeliLine[i]
      if(i!=katzDeliLine.length-1){
        string = string + counter + ". "+katzDeliLine[i]+", "
      }else{
        string = string + counter + ". "+katzDeliLine[i]
      }
    }
    return string
  }
}
