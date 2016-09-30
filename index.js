function takeANumber(katzDeliline, name){
  katzDeliline.push(name);
  return ("Welcome, " + name + "." + " You are number " + (katzDeliline.length)  + " in line.")
}

function nowServing(deliLine, name){
  if (deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    for( var i = 0; i < katzDeliline.length; i++){
   return ("The line is currently: " + (i + 1) + ". " + katzDeliline[i] + ", ")
  }
} else {
    return "The line is currently empty."
  }
}
