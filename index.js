var katzDeli = []

function takeANumber(katzDeli, customerName){
   katzDeli.push(customerName)
   return `Welcome, ${customerName}. You are number ${katzDeli.length} in line.`
 }

function nowServing(katzDeli){
  if (katzDeli.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    return 'Currently serving ' +katzDeli.shift()+ '.';
  }
}

var servingLine = []

function currentLine(katzDeli) {
  if (katzDeli.length===0) {
    return 'The line is currently empty.'
  }
  else {
    for (let i = 0; i < katzDeli.length; i++) {
    servingLine.push(` ${i+1}. ${katzDeli[i]}`)
  }
 }
return "The line is currently:" + servingLine
}
