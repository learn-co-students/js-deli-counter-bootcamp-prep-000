function takeANumber (katzDeliLine, name){
   var position = katzDeliLine.length+1
   katzDeliLine.push(name)
 return "Welcome, " + name +". You are number "+ position +" in line."
 
 }
 
 function nowServing (deliLine){
 var name;
 
 if(deliLine.length === 0){
   return "There is nobody waiting to be served!"
 }
 
 name = deliLine.shift();
 return "Currently serving " + name + ".";
 }
 
 
 
 //create empty array to hold string
 var line = []
 function currentLine(katzDeli) {
//loop through length of line then call push on line to add index + 1 to empty array to display the number. Concat a period after number, then a space. Concat the current index of the length of the deli line.
   for (let i = 0; i < katzDeli.length; i++) {
    line.push((i+1) + `. `  + katzDeli[i])
   }
   if(katzDeli.length === 0) {
   return "The line is currently empty."
   } else {
     return 'The line is currently: ' + line.join(', ');
   }
   
 }