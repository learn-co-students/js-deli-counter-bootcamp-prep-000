function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var positioninline = katzDeliLine.indexOf(name) + 1
  return "Welcome, " + name + "." + " You are number " + positioninline + " in line."
}

//why can't do katzDeli.shift() after the if/else function?
function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

//why can't do if katzDeliLine = [], then return "The line is empty."
function currentLine(katzDeliLine){
  var newarray = []
  if (katzDeliLine.length > 0){
    for (let i = 0; i < katzDeliLine.length; i++){
    newarray.push(" " + (i + 1) + ". " + katzDeliLine[i])
  }
  return "The line is currently:" + newarray
} else {
  return "The line is currently empty."
  }
}
