var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeli = katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " +  (katzDeliLine.length) + " in line.")
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length > 0 )
    {
      return 'Currently serving ' + katzDeliLine.shift() + '.'
      
    }
  else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine){
  var listLine = []
  for (var i = 0; i < katzDeliLine.length; i++){
    listLine.push (' ' + [i+1] + '. ' + katzDeliLine[i])
  }
  if (katzDeliLine.length > 0) {
     return ("The line is currently:" + listLine)
      
    }

  else {
    return ("The line is currently empty.")
  }
}