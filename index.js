function takeANumber(katzDeliLine,name){ 
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line."
}


function nowServing(katzDeliLine){
  var current = " ";
  if ( katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else{
    current = katzDeliLine.shift()
    return "Currently serving " + current + "."
  }
  
}

function currentLine(katzDeliLine){
  var emptyArray = [];
  if (katzDeliLine.length < 1){
    return "The line is currently empty."
  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
      emptyArray.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return "The line is currently: " + emptyArray.join(", ")
  }
}


