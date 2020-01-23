function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var welcomeMessage =  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return welcomeMessage
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0)
  {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }else{return "There is nobody waiting to be served!"}
  
}
function currentLine(katzDeliLine){
  
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    var currentLineString = "The line is currently:"
    var j = katzDeliLine.length
    for( var i = katzDeliLine.length; i > 1; i--){
      currentLineString = currentLineString + (` ${j-i + 1}. ${katzDeliLine[j-i]},`)
    }
    currentLineString = currentLineString + (` ${j}. ${katzDeliLine[j-1]}`)
    return currentLineString
  }
}