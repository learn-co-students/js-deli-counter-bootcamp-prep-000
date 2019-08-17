function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  for (var i = 0; i<katzDeliLine.length; i++){
    if (katzDeliLine[i] === name){
      var spot = i+1
    }
  }
  return("Welcome, " + name + ". " + "You are number " + spot + " in line.")
}

function nowServing(katzDeliLine){
  var len = katzDeliLine.length
  if(len > 0){
    var out = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
  } else{
    out = "There is nobody waiting to be served!"
  }
  return out
}

function currentLine(katzDeliLine){
  var len = katzDeliLine.length
  if(len > 0){
    var out = "The line is currently: "
    for (var i = 0; i < len-1; i++){
      var string = i+1 + ". " + katzDeliLine[i] +", "
      out = out + string
    } 
    out = out + len + ". " + katzDeliLine[len-1]
  } else { 
      out = "The line is currently empty." 
  }
  return out
}