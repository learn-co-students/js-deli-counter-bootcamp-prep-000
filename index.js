var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var position;
  katzDeliLine.push(name);
  position = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return position;
}
 function nowServing(katzDeliLine, name){
   if (katzDeliLine.length === 0) {
     return "There is nobody waiting to be served!";
   }
   else {
     var current = `Currently serving ${katzDeliLine[0]}.`;
     katzDeliLine.shift(katzDeliLine[0]);
     return current;
   }
 }
 function currentLine(katzDeliLine) {
      var string = ``;
   if (katzDeliLine.length === 0) {
     return "The line is currently empty.";
   }
   else {

     for (var i = 0; i < katzDeliLine.length -1 ; i++) {
       var index = katzDeliLine[i];
     string += `${katzDeliLine.indexOf(index) + 1}. ` + `${katzDeliLine[i]}, ` ;
   }
   return 'The line is currently: ' + `${string}` + `${katzDeliLine.indexOf(katzDeliLine[katzDeliLine.length-1])+1}. ${katzDeliLine[katzDeliLine.length -1]}`;
   }

 }
