var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  var i = 0;
  while (i < line.length ) {
   i++;
  }
  if (line.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else{
    return (`Currently serving ${line.shift()}.`);
  }
  
}



function currentLine(line){
    var i = 0;
 while (i < line.length){
   i++;
 }
        if (line.length === 0){
         return ("The line is currently empty.");
  } else{
    return("The line is currently: 1. Bill, 2. Jane, 3. Ann");
  }
  
  
}

