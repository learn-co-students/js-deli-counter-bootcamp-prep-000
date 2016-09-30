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

var katzDeliline = ["bill"]

function currentLine(katzDeliline){
  const numbersAndNames = [];
  for( var i = katzDeliline.length; i > 0; i--){
    numbersAndNames.unshift(i + ". " + katzDeliline.pop())
    }
  var newN = numbersAndNames.join(', ');
if (numbersAndNames.length > 0){
    return ("The line is currently: " + newN)
} else {
    return( "The line is currently empty.")
  }
}
