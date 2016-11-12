var katzDeli=[]
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  katzDeli= katzDeliLine
  return("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.")
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length<1) {
  return "There is nobody waiting to be served!"
  }
  else {
    var up=katzDeliLine[0]
    katzDeliLine.shift(0)
    return ("Currently serving " + up +".")
  }
}
function currentLine(line) {
  var curLine = ""
  if (line.length<1) {
    return "The line is currently empty."
  }
  else {
    for (var i=0; i<=currentLine.length+1; i++) {
      if(i<=currentLine.length) {
      curLine= curLine + " " + (i+1) + ". " + line[i] +","
    }
    else {
      curLine= curLine + " " + (i+1) + ". " + line[i]
  }
}
    return ("The line is currently:" + curLine)

}
}
