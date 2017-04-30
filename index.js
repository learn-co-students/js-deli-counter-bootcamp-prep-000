var katzDeliLine = []

function takeANumber(array, name) {
    array.push(name);
    return "Welcome, " + name + ". You are number " + array.length + " in line."
}

function nowServing(array, name) {
  if (array.length === 0) {
     return "There is nobody waiting to be served!"
   }

   return `Currently serving ${array.shift()}.`
 };

 function currentLine(array) {
     if (array.length === 0) {
         return "The line is currently empty."
     }

 var newLine = []

 for (let i = 0, l = array.length; i < l; i++) {
     newLine.push(`${i + 1}. ${array[i]}`)
 }
 return `The line is currently: ${newLine.join(', ')}`
 }
