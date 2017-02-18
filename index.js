var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
  for(let i = 0; i < katzDeliLine.length; i++) {
    if(katzDeliLine[i] === name) {
      return 'Welcome, ' + name + '. You are number ' + (i + 1) + ' in line.'
      }
    }
}
 function nowServing(katzDeliLine) {

   if(katzDeliLine.length > 0){
     return "Currently serving " + katzDeliLine.shift() + ".";
   }
   else {
     return "There is nobody waiting to be served!";
   }
 }

 function currentLine(katzDeliLine) {
   var string = "The line is currently"
   if(katzDeliLine.length > 0) {
     string += ":";
     for(let i = 0; i < katzDeliLine.length; i++) {
       if(i === 0) {
       string += " " + (i + 1)+ ". " + katzDeliLine[i];
        }
        else {string += ", " + (i + 1)+ ". " + katzDeliLine[i];}
     }
     return string
   }
   else if(katzDeliLine.length === 0){
     return "The line is currently empty."
   }
 }
