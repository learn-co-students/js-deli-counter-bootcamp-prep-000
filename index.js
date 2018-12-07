const takeANumber = (line, name) => {
   line.push(name);
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

const nowServing = (line) => {
 

  if (!line.length) { 
    return 'There is nobody waiting to be served!'
    
  }
  return 'Currently serving ' + line.shift() +'.';
}




function currentLine(line){
  if (!line.length) {
    return "The line is currently empty.";
  }

  var message = [];
  
  for(var i=0; i<line.length; i++) {
    message.push(i+1 + ". "+ line[i]);
  }
   
  return 'The line is currently: ' + 
  message.join(', ')
  
  
}