function takeANumber(katzDeliLine, personName) {
   katzDeliLine.push(personName);
   return "Welcome, " + personName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(line) {
  if (line.length  === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line){
   if(line.length == 0) {
     return "The line is currently empty.";
  }

   var result = [];

   for(var i = 0; i < line.length; i++) {
     result.push(i + 1 + ". " + line[i]);
   }
   return "The line is currently: " + result.join(', ');
 }
