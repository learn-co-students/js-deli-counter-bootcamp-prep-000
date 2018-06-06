var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(customer){
  if (customer.length === 0 ){
    return "There is nobody waiting to be served!" 
  } else {
    
    return `Currently serving ${customer.shift()}.`
  }
}

function currentLine(line) {
 if (line.length === 0) {
   return "The line is currently empty."
  } 
  else {
   var lineNameAndNo = []
   for (let i = 0; line.length> i; i++ ){
     lineNameAndNo.push(`${i +1}. ${line[i]}`)
   }
   return `The line is currently: ${lineNameAndNo.join(', ')}` 
    
  }
}
   
 
  

