let katzDeliLine = []

function takeANumber (katzDeliLine,addCustomer) {
  katzDeliLine.push(addCustomer)
  console.log("Welcome, "+ katzDeliLine[katzDeliLine.length-1]
  + ". You are number " + katzDeliLine.length + " in line.")
} 

function currentLine (katzDeliLine) {
  let message = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
  message.push(i+1 + '. ' + katzDeliLine[i])
  }
  console.log("The line is currently: " + message.join(" "))
}

function nowServing (katzDeliLine) {
  let firstCustomer = katzDeliLine.shift()
  if (katzDeliLine.length > 0 || firstCustomer !== undefined) {
  console.log ("Currently serving: " + firstCustomer)
  } else {
  console.log ("There are no more customers to serve")
  }
}

