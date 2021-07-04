function takeANumber(katzDeli, Name) {
  katzDeli.push(Name)
 var greeting = "Welcome, " + Name + ". " + "You are number " + parseInt(katzDeli.length) + " in line."
 return greeting
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0 ) {
    return "There is nobody waiting to be served!"
  }
  
  else {
    return "Currently serving " + katzDeli.shift() + "." 
    
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else {
    var elements = [];
  for (var i = 0; i < katzDeli.length; i++) {
    
     elements.push(parseInt(i+1) + ". " + katzDeli[i]);
     var y = elements.join(", ")
  }
  return "The line is currently: " + y
}
}
