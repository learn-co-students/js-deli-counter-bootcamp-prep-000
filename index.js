var orderAndPerson = [];
 var line = [];
 
 function takeANumber(line, person) {
   line.push(person)
 
   return `Welcome, ${person}. You are number ${line.length} in line.`
 }
 
 function currentLine(line) {
   if (line.length === 0) {
     return "The line is currently empty."
   }
 
   for (var i = 0, l = line.length; i < l; i++) {
     orderAndPerson.push(`${i + 1}. ${line[i]}`)
   }
 
   return `The line is currently: ${orderAndPerson.join(', ')}`
 }
 
 function nowServing(line) {
   if (line.length === 0) {
     return "There is nobody waiting to be served!"
   }
   return `Currently serving ${line.shift()}.`
 }