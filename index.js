 function takeANumber (number, name) {
   number.push(name);
   return "Welcome, " + name + ". You are number " + number.length + " in line."
 }
 function nowServing (number) {
   if (number.length === 0) {
     return "There is nobody waiting to be served!"
   } else {
   var name = number[0];
   number.shift(0,1);
     return "Currently serving " + name + ".";
   }
 }
 function currentLine(number) {
   if (number.length === 0) {
     return "The line is currently empty."
   } else {
     return "The line is currently: 1. "+number[0]+", 2. " + number[1] + ", 3. " + number[2];
   }
 } 