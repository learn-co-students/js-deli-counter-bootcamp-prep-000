var katzDeli = [];

var takeANumber = function(katzDeliLine, newPerson){
    var NewPersonPosition = katzDeliLine.length + 1;
    katzDeliLine.push(newPerson);
    return `Welcome, ${newPerson}. You are number ${NewPersonPosition} in line.`;
}

 var nowServing = function(katzDeli){
   if (katzDeli.length === 0){
     return "There is nobody waiting to be served!";
   } else {
     var next = katzDeli[0];
     katzDeli.shift();
     return `Currently serving ${next}.`;
   }
 }
/*Build a function `currentLine` that returns the current line.
For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)`
would return `"The line is currently: 1. Ada 2. Grace"`.  If there is nobody in line,
it should return `"The line is currently empty."`
*/

 var currentLine = function(katzDeli){
   if (katzDeli.length === 0){
     return "The line is currently empty.";
   } else {
     var i = 0;
     var nameLine = [];
     var theLineIs = "The line is currently:";
     while(i < katzDeli.length){
       nameLine.push(` ${i+1}. ` + katzDeli[i]);
       i++;
     }
     return theLineI + nameLine;
   }
 }
