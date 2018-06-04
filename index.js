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
  function currentLine(line) {
   if (line.length === 0){
      return 'The line is currently empty.'
   }
  var string = 'The line is currently: '
  var array = []
    for (var i = 0; i < line.length; i++) {
     array.push(`${i + 1}. ${line[i]}`)
    
    
     }
   return string + array.join(', ')
  }
  
