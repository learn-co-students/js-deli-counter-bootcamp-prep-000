function takeANumber(line,name){line.push(name)
var count = line.length
  
 return `Welcome, ${name}. You are number ${count} in line.` 
}

function nowServing(line){if(line.length>=1){
var bye = line.shift();
  return `Currently serving ${bye}.`
}
else return "There is nobody waiting to be served!"
}   

function currentLine(line){
  var bigKatz = "The line is currently:"
  if (line.length>0){
  for(var i=0; i< line.length; i++){
    var person = line[i]
    var position = i+1
   var KatzDeliLine = ` ${position}. ${person}`
   if(position !==1){bigKatz = bigKatz + ","+ KatzDeliLine}
   else bigKatz = bigKatz + KatzDeliLine}
   return bigKatz
   }
   else return "The line is currently empty."
}
  