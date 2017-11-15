var katzdeli = []

function takeANumber(katzDeliLine, customer){

 katzDeliLine.push(customer)
 return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
 }

 function nowServing(katzDeliLine){
 if(katzDeliLine.length === 0)
     return "There is nobody waiting to be served!"

  return `Currently serving ${katzDeliLine.shift()}.`
 }

 function currentLine(line){
   if(line.length === 0)
    return "The line is currently empty."

   var message = `The line is currently: 1. ${line[0]}`
  for(var i = 1; i < line.length; i++){
    message += `, ${i+1}. ${line[i]}`
    }
   return message
 }
