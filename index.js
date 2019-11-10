function takeANumber(line, customer){
 line.push(customer)
 var greeting = `Welcome, ${customer}. You are number ${line.length} in line.`
 return greeting
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line){
  var newLine = []
  if (line.length === 0){
    return "The line is currently empty."}
  else {
    for (let i = 0; i < line.length; i++){
      newLine.push(` ${i +1}. ${line[i]}`)
      
    }
    return `The line is currently:${newLine}`
  }
}
