var katzDeliLine = [];

function takeANumber (katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  console.log(`Welcome ${customerName}. You are number ${katzDeliLine.length} in line`)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.splice(0,1)}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine (katzDeliLine){
  if(katzDeliLine.length > 0) {
    let newArray = [];
    for (var i = 0; i < katzDeliLine.length; i++){
      newArray.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
    return "The line is currently:" + newArray
  } else {
    console.log("The line is currently empty.")
    return "The line is currently empty."
  }
}

