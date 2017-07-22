var katzDeli = ["abc", "def", "ghi"];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var positionLine = katzDeliLine[name]
  return ("Welcome " + name + ". You are number " + positionLine " in line.")
}
