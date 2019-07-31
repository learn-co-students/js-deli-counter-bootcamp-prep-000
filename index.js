 var katzDeliLine = [];
 
 function takeANumber(people, newPerson) {
   people.push(newPerson);
   return `Welcome, ${newPerson}. You are number ${people.length} in line.`;
 }
 
 function nowServing(katzDeliLine) {
   if(katzDeliLine == false) {
     return 'There is nobody waiting to be served!';
     
   } else {
     return `Currently serving ${katzDeliLine.shift()}.`;
   }
 }
 
 function currentLine(people) {
   if (people == false) return 'The line is currently empty.';
   
   var str = 'The line is currently:';
   
   for (let i = 0; i < people.length; i++) {
     if (i != people.length - 1) {
       str += ` ${i + 1}. ${people[i]},`;
     } else {
       str += ` ${i + 1}. ${people[i]}`;
     }
   }
   return str
 }