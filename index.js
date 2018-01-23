var katzDeliLine = [];

    function takeANumber(katzDeliLine, name) {
      katzDeliLine.push(name);
      return("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.");
    }

    function nowServing(katzDeliLine) {
      if (katzDeliLine.length > 0) {
        var up = katzDeliLine.splice(0,1);
        return ("Currently serving " + up + ".");
        
        }
      else {
        return ("There is nobody waiting to be served!");
          }
    }


  function currentLine(katzDeliLine) {
    var line = 0;
    
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
      }

    var current = "The line is currently: ";
    while (line < katzDeliLine.length) {
      if (line+1 === katzDeliLine.length){
        current += (line + 1) + ". " + katzDeliLine[line];
        line++;
      }
      else{
        current += (line + 1) + ". " + katzDeliLine[line] + ", ";
        line++;
      }
    }
      return current;
  }