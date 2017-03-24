var katzDeliLine = [];
 function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
 }

 function nowServing(katzDeliLine) {
   if (katzDeliLine.length === 0)
    {return "There is nobody waiting to be served!"}
   else {return "Currently serving " + katzDeliLine.shift() + "."};
    }

    function currentLine(katzDeliLine) {
      var word = "The line is currently: "
      
      if (katzDeliLine.length === 0)
        {return  "The line is currently empty."}
      else 
         {for (var z = 0; z < katzDeliLine.length; z++) {
          word += (z + 1) + ". " + katzDeliLine[z] + ", "
         }return word
         }         
       }
  