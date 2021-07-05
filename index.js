function takeANumber(line,name){
  line.push(name)
  return "Welcome, "+ name +". You are number "+ (line.length) +" in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length<1){
    return "There is nobody waiting to be served!"}
    var name = katzDeliLine[0]
    katzDeliLine.shift()
  return "Currently serving " + name + ".";
}

function currentLine (katzDeliLine){
   if (katzDeliLine.length<1){
    return "The line is currently empty."}
    var name = ""
  for (var i = 0; i<katzDeliLine.length; i++){
    if (i===katzDeliLine.length-1){
      name = name + (i+1) + ". " + katzDeliLine[i] 
      }else{
    name = name + (i+1) + ". " + katzDeliLine[i] + ", "
    }
  }
  name = "The line is currently: " + name
  return name
}