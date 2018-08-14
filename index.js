function takeANumber(line,personsname) {
  line.push(personsname)
  return `Welcome, ${personsname}. You are number ${line.length} in line.`
}

function nowServing(line) {
   if(line.length===0){
     return "There is nobody waiting to be served!"
   }
   else{ 
     var firstperson = line.shift() 
     return `Currently serving ${firstperson}.`
   }
}
function currentLine(line) {
 if(line.length===0) {
   return "The line is currently empty."
 }
 else{
   var statement = "The line is currently:"
   for(var i=0; i<line.length;i++) {
    statement = statement + ` ${i+1}. ${line[i]}`
    if(i < line.length -1){
      statement = statement + ","
    }
   }
   return statement
 }
}