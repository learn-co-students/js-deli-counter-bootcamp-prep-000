
function takeANumber (katzDeliline,name) {
  katzDeliline.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliline.length + " in line." // typical example of how to add names 
}

function nowServing (katzDeliline) {
  if (katzDeliline.length === 0)  {
  return "There is nobody waiting to be served!"
} else { 
    var name = katzDeliline[0];
    katzDeliline.splice(0,1); // return the first person in line and then remove that individual from the line.
    return "Currently serving " + name + ".";
}
}

function currentLine (Newline){
  var line = []
  if (Newline.length === 0){ // if the line is empty 
    return "The line is currently empty."
  } else { 
    for (var i = 0; i < Newline.length; i++){ // compares how many people there are in the line and if there are people executes else loop 
    
    line += (i + 1) + ". " + Newline[i] + ", "
  }
  line = line.slice(0, line.length-2)
  return "The line is currently: " + line
  }
  
}




