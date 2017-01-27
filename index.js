function takeANumber(katzDeliLine, person) {
     katzDeliLine.push(person)
     return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
 }
 
 function nowServing(katzDeliLine) {
   if (katzDeliLine.length === 0) {
     return "There is nobody waiting to be served!"
   } else {
     var name = katzDeliLine.shift()
     return `Currently serving ${name}.`
   }
 }
 
 function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
     return "The line is currently empty."
   } else {
     var string = "The line is currently: "
     for (var i = 0; i < katzDeliLine.length; i++) {
       string = string + `${i+1}. ${katzDeliLine[i]}, `
     }
     return string.slice(0, string.length-2)
   }
 }