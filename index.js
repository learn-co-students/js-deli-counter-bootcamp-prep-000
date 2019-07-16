let katzDeliLine = []

function takeANumber (katzDeliLine,addCustomer) {
  katzDeliLine.push(addCustomer)
  return ("Welcome, "+ katzDeliLine[katzDeliLine.length-1]
  + ". You are number " + katzDeliLine.length + " in line.")
} 

function currentLine (katzDeliLine) {
  let message = [];
  if (katzDeliLine.length > 0) {
  for (let i = 0; i < katzDeliLine.length; i++) {
  message.push(i+1 + '. ' + katzDeliLine[i])
  }
  return ("The line is currently: " + message.join(", "))
  } else {
    return ("The line is currently empty.")
  }
}

function nowServing (katzDeliLine) {
  let firstCustomer = katzDeliLine.shift()
  if (katzDeliLine.length > 0 || firstCustomer !== undefined) {
  return ("Currently serving " + firstCustomer + ".")
  } else {
  return ("There is nobody waiting to be served!")
  }
}