var katzDeli = []
var customerName = ['Ada', 'Grace', 'Brent']
var deliLine = ["Steven", "Blake", "Avi"]

function takeANumber(katzDeli, customerName){
   katzDeli.push(customerName)
   return "Welcome, "+ customerName + ". You are number " + katzDeli.length + " in line."
   return katzDeli;
 }

function nowServing(deliLine){
  if (deliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    return 'Currently serving ' +deliLine.shift()+ '.';
  }
}

function currentLine(deliLine){
  if (deliLine.length===0){
    return 'The line is currently empty.'
  }
  else {
    return 'The line is currently: 1. ' + deliLine[0] + ', 2. ' + deliLine[1] + ', 3. ' + deliLine[2]
    }
  }
  
