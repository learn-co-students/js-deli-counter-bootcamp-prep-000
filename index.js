var katzDeliLine = [];

 function takeANumber(katzDeliLine, name) {
 +  katzDeliLine.push(name);
 return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
 }

 function nowServing(katzDeliLine) {
   var serving = "Currently serving " + katzDeliLine.shift() + ".";
   if(katzDeliLine.length == 0) {
     return "There is nobody waiting to be served!";
   } else {
     return serving;
   }
 }

 function currentLine(katzDeliLine) {
   var array = [];
   if(katzDeliLine.length == 0) {
     return "The line is currently empty.";
   } else {
     for(var i = 0; i < katzDeliLine.length; i++) {
       array.push(" " + (i + 1) + ". " + katzDeliLine[i])
     }
     return "The line is currently:" + array;
   }
 }
