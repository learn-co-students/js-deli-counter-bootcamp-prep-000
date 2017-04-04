function takeANumber(line, person) {
   line.push(person);
   return `Welcome, ${person}. You are number ${line.length} in line.`;
 }

 function nowServing(line) {
   if (line.length < 1) {
     return "There is nobody waiting to be served!";
   } else {
     return `Currently serving ${line.shift()}.`;
   }
 }

 function currentLine(line) {
   var line_with_numbers = [];
   if (line.length < 1) {
     return "The line is currently empty.";
   } else {
     line.forEach(function(person, index) {
       line_with_numbers.push((index+1) + ". " + person);
     });
     return `The line is currently: ${line_with_numbers.join(", ")}`;
   }
 }
