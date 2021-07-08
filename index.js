function takeANumber(line, name)
{
 line.push(name)
  var whatToReturn = ("Welcome, "  + name +  ". You are number "  + line.length +  " in line.");
  return whatToReturn
  
}

function nowServing(katzDeliLine)
{
  if ( katzDeliLine.length > 0)
  {
    var firstInLine = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return firstInLine;
  }
  
  else
  {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(line) {
 if (line.length > 0) { 
   var message = "The line is currently:"
   
   for (let i = 0; i < line.length; i++) {
     if (i > 0) {
       message = message + ","
     }
     message = message + " " + (i + 1) + ". " + line[i] 
   } 
   return message
 } else {
  return "The line is currently empty."
 }
}