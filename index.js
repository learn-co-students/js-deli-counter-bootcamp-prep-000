//let customerNumber = 0
/*function takeANumber(lineArray){
  customerNumber++
  lineArray.push(customerNumber)
  return customerNumber
}
function takeNumber(lineNumber){
  //var customerNumber = 
  if (customerNumber < 1){
    var customerNumber = 0
    customerNumber++
    lineNumber.push(customerNumber)
    return customerNumber
  
  } else{
     customerNumber++
     lineNumber.push(customerNumber)
     return customerNumber
  }
}
/*function takeANumber(lineArray){
  var customerNumber = 0
  customerNumber++
  lineArray.push(customerNumber)
  return customerNumber
}*/

function takeANumber(lineNumber, customerName){
  lineNumber.push(customerName)
  return `Welcome, ${customerName}. You are number ${lineNumber.length} in line.`
  
}

function nowServing(lineNumber){
  if(lineNumber.length === 0){
    return 'There is nobody waiting to be served!'
  } else{
    return `Currently serving ${lineNumber.shift()}.`
  }
}

function currentLine(lineNumber) {
    var counter = 0
    var lineCount = ""

    if (lineNumber.length > 0) {
        while (counter < lineNumber.length) {
            lineCount = (counter + 1) + ". " + lineNumber[counter] + ", "
        }
    } else {
        return "The line is currently empty."
    }

    return `The line is currently: ${lineCount}`
}