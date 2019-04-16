var katzDeli = []

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person)
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var person = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + person + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line){
  var string = "The line is currently: "
  if(line.length > 0){
    for(var i = 0; i < line.length - 1; i++){
      string += (i+1)+ ". " +line[i]+", "   //last one is different so end at second to last
    }
    string += (i+1)+ ". " +line[i]  //no punctuation after last one
    return string
  }
  else {
    return "The line is currently empty."
  }
}
