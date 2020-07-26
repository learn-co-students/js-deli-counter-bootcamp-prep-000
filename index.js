var katzDeliLine=[]

function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer);
  var position = currentLine.length;
  return (`Welcome, ${newCustomer}. You are number ${position} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
   return "Currently serving " + `${katzDeliLine.shift()}` + "."
   
  } else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(list) {
  if (list.length === 0) {
    return "The line is currently empty."
  } else {
    var array = []
    for (var i = 0; i < list.length; i++) {
    array.push(`${i + 1}` + '. ' + `${list[i]}`)
  }
    return 'The line is currently: ' + `${array.join(', ')}`
    }
}