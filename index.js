function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {return "There is nobody waiting to be served!";}
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var array = [];
    for(var i = 0; i < katzDeliLine.length; i++){
      if (i == katzDeliLine.length-1){ // If the person is last in line, does not append a ","
        array.push(i+1 + ". " + katzDeliLine[i])
      } else { // if the person is not last in line, appends a ","
      array.push(i+1 + ". " + katzDeliLine[i] + ",");
      }
    }
    return "The line is currently: " + array.join(" ")
  } else {
    return "The line is currently empty."
  }
}
