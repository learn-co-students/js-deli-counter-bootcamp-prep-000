function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  } 
    return "Currently serving " + line.shift() + ".";
  
}


function currentLine(line) {
  var newArray = [];
  if (line.length === 0) {
    return `The line is currently empty.`;
  } 
  for (var i = 0; i < line.length; i++) {
    
    newArray.push(" " + (i + 1) + ". " + line[i]);
    
  }
    console.log(`The line is currently:` + newArray);
    return `The line is currently:` + newArray;
}