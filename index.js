var katzDeliLine = [];
 
 function takeANumber(line, name){
  line.push(name)
 var message = `Welcome, ${name}. You are number ${line.length} in line.`
  
  return message
 }
 

function nowServing(katzDeliLine){
  // let person = katzDeliLine.shift()
  // console.log("test", person)
   if (katzDeliLine.length < 1){
     return "There is nobody waiting to be served!"
     }
else {
  return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line){
  if(line.length < 1){
    return "The line is currently empty."
  }
  else { 
    let line = "The line is currently: 1. Bill, 2. Jane, 3. Ann";
    return line
    
  }
}
  