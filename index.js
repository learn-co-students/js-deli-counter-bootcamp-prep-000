function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  return katzDeliLine.length === 0 ? "There is nobody waiting to be served!" : "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(katzDeliLine){
  var stmt = "The line is currently"
  
  if(katzDeliLine.length <= 0){
    return stmt + " empty."
  }
  stmt += ": "
  for(var i = 0; i < katzDeliLine.length; i++){
    stmt += `${i+ 1}. ${katzDeliLine[i]}`
    stmt += (i == katzDeliLine.length - 1) ? "" : ", "
  }
  return stmt
}