var katzDeliLine = []

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.` 
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var frontInLine = katzDeliLine[0]   
    katzDeliLine.shift()
    return `Currently serving ${frontInLine}.`  
  } else {
      return 'There is nobody waiting to be served!'
  }
}


let accumulator = 'The line is currently: '

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } 

  for (let i = 0; i < katzDeliLine.length; i++) {

   let positionInQueue = i + 1
   let personInQueue = katzDeliLine[i]
   let customer = `${positionInQueue}. ${personInQueue}, `

   accumulator += customer
  
  }
  
  return accumulator.slice(0, -2)

} 