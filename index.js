//function takeANumber takes two parameters - 
// katzDeliLine and person's Name
// Return ACTUAL position in line, not array position :-)


function takeANumber(katzDeliLine, clientName) {
  katzDeliLine.push(clientName)
  var lineSize = parseInt(katzDeliLine.length) //clientName.length 
  var queue = `Welcome, ${clientName}. You are number ${lineSize} in line.` 
return queue 
  
  //'Welcome, ' + clientName + '. You are number ' + katzDeliLine + ' in line.' + katzDeli.length
  
  //'number in line ' + katzDeliLine + 'name: ' + clientName
}


// Function nowServing should return the first person in line and then 
// remove that individual from the line. If there is nobody in line, 
//it should return "There is nobody waiting to be served!"
function nowServing(katzDeli) {
  var howManyLeft = katzDeli.length
  if(howManyLeft == 0) {
    //var clientName = '';
    return  'There is nobody waiting to be served!' + katzDeli //'Currently serving ' + katzDeli.shift()
  } else {
    return 'Currently serving ' + katzDeli.shift() + '.'  
  }
}

// Build a function currentLine that returns the current line. 
// For example, if katzDeliLine is currently ["Ada", "Grace"], 
// currentLine(katzDeliLine) would return "The line is 
// currently: 1. Ada, 2. Grace". If there is nobody in line, 
// it should return "The line is currently empty."

function currentLine(line, value, index) {
  var finallyWeArrive = []
  var howManyInLine = line.length
  var newArray = line.forEach(function(value, index) {
      return finallyWeArrive = [(' ' + (index + 1) + '. ' + value), ...finallyWeArrive]
      })
      
 if( howManyInLine == 0) {
    return 'The line is currently empty.' 
  } else {
      return 'The line is currently:' + finallyWeArrive.reverse()
}

/*
  var howManyInLine = line.length
  var index = line[index]
  var ohYou = line.indexOf(index)
  if( howManyInLine == 0) {
    return 'The line is currently empty.' 
  } else {
     for(var i = 0; i < line.length; i++)
     return `The line is currently: index${[i + 1]}. ${line}`
     // console.log(`${howManyInLine[i]}`)
  }
     
*/

