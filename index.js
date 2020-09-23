function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
  return (`Currently serving ${array.shift()}.`)
} else {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
 if(array.length > 0) {
   var array2 = []

   for (let i = 0; i < array.length; i++) {
     array2.push(`${i + 1}. ${array[i]}`)
   }
     return `The line is currently: ${array2.join(", ")}`
 } else {
   return "The line is currently empty."
 }
}
