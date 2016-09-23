var katzDeliLine = [];

   	function takeANumber(katzDeliLine, name) {
   		katzDeliLine.push(name);
   		return("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.");
   	}

   	function nowServing(katzDeliLine) {
   		if (katzDeliLine.length > 0) {
        return ("Currently serving " + katzDeliLine[0] + ".");
        katzDeliLine.shift();
        debugger;
   			}
   		else {
        return ("There is nobody waiting to be served!");
   	      }
  	}


	function currentLine(katzDeliLine) {
    	var line = 0

     while (line < katzDeliLine.length); {
        return ("The line is currently " + (line + 1) + ". " + katzDeliLine[line]);
  			line++;
      }

		if (katzDeliLine.length == 0) {
      return "The line is currently empty."
			}
	}
