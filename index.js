
var katzDeli = []
function takeANumber (line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
 function nowServing(line, name) {
   var first = line.shift()
 if (line.length >= 1) {
   return `Currently serving ${first}.`
} else {
  return "There is nobody waiting to be served!"
} 
}
  
