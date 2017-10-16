function  takeANumber(katzDeliLine, name){
  var katzDeli = katzDeliLine
  katzDeli.push(name)
  var position = katzDeli.length
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.'
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() +"."
  }
}
function currentLine(katzDeliLine){
  var string = ""
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
      string += (i + 1) + ". " + katzDeliLine[i]
      if(i < (katzDeliLine.length - 1)){
        string += ", "
      }
    }
    return "The line is currently: " + string
  }
}
