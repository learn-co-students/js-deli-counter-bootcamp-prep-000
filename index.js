//this will report the person being served in line.
function currentLine(line){
  if (line.length===0){
    return("The line is currently empty.")
  }
  const linePosition = []
  for (let i = 0, l = line.length; i < l; i++){
    linePosition.push(`${i + 1}. ${line[i]}`) //this should not be absolute position, but relative position
  }
  return (`The line is currently: ${linePosition.join(', ') }`)
}

//status of current line length
function nowServing (line, customerName){
 if (line.length===0){
   return ("There is nobody waiting to be served!")
 }else{
   return(`Currently serving ${line.shift()}.`)
 }
}

//what number is someone in line once they "take a number"
function takeANumber(line, customerName){
  line.push(customerName) // pushes the name of the customer into katzDeliLine[]
  return (`Welcome, ${customerName}. You are number ${line.length} in line.`) //returns customer name and line length
}