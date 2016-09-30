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

var katzDeliline = ["Bill", "Jane", "Ann"];

function currentLine(katzDeliline){
  const numbersAndNames = [];
  for( var i = 0; i < katzDeliline.length; i--){
    numbersAndNames.push((i + 1) + ". " + katzDeliline.shift())
    }
if (numbersAndNames.length > 0){
    return ("The line is currently: " + numbersAndNames)
} else {
    return( "The line is currently empty.")
  }
}
