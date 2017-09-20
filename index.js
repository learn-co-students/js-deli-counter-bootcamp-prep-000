var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var a = katzDeliLine.indexOf(name)
  return "Welcome, " + name + ". You are number " + (parseInt(a)+1) + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0 ){
    let message = "Currently serving " + katzDeliLine[0] +".";
    katzDeliLine.shift();
    return message
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var array = []
  for (let i=0; i < katzDeliLine.length; i++){
    array.push( " " + (i+1) + ". " + katzDeliLine[i])
  }
  if (katzDeliLine.length > 0){
    return "The line is currently:" + array
  } else {
  return "The line is currently empty."
  }
}
