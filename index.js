var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
   katzDeliLine.push(name);
   return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
    var message = "";
    if(katzDeliLine.length == 0) {
        message = "There is nobody waiting to be served!";
    } else {
        var name = katzDeliLine.shift();
        message = "Currently serving " + name  + ".";
    }
    return message;
}

function currentLine(katzDeliLine) {
  var message = "";
  var listOfNames = "";
  if(katzDeliLine.length == 0) {
      message = "The line is currently empty.";
  } else {
      for(var i = 0 ; i < katzDeliLine.length; i++ ) {
         if(i > 0)
         {
           listOfNames += ", " + (i + 1) + ". " + katzDeliLine[i];
         } else
         {
           listOfNames += (i + 1) + ". " + katzDeliLine[i];
         }
      }
      message = "The line is currently: " + listOfNames;
    }
  return message;
}
