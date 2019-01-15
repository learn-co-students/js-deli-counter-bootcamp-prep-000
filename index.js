var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
     katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(katzDeliLine){
  var name= katzDeliLine[0]
  katzDeliLine.shift()
  if(katzDeliLine.length <= 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving " + name + "."
  }
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length <= 0){
    return "The line is currently empty."
  }
  else{
    var lineString ="The line is currently: "
    for(let i=0 ; i< katzDeliLine.length-1 ; i++){
    lineString = lineString + (i+1) + ". " + katzDeliLine[i] +", "
    }
    lineString = lineString + "3. " + katzDeliLine[katzDeliLine.length-1]
   return lineString
       }
}
