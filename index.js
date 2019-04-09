
function takeANumber (katzDeliline,name) {
  katzDeliline.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliline.length + " in line." // typical example of how to add names 
}

function nowServing (katzDeliline) {
  if (katzDeliline.length === 0)
  return "There is nobody waiting to be served!"
} 


function currentLine (Newline){
  
  if (Newline.length === 0){
    return "The line is currently empty."
  } else { 
    for (var i = 0; i < Newline.length; i++){
    Newline += (i + 1) + ". " + NewLine[i] + ", "
  }
  line = line.slice(0, line.length-2)
  return "The line is currently empty."
  }
  
}


