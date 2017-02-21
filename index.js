var katzDeli = []
var customerName = ['Ada', 'Grace', 'Brent']

function takeANumber(katzDeli, customerName){
   katzDeli.push(customerName)
   return "Welcome, "+ customerName + ". You are number " + katzDeli.length + " in line."
   return katzDeli;
 }

function nowServing(katzDeli){
  if (katzDeli.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    return 'Currently serving ' +katzDeli.shift()+ '.';
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length===0) {
    return 'The line is currently empty.'
  }
  else {
    var statement = 'The line is currently: ';
    for (let i = 0; i < katzDeli.length; i++) {
    if (i === katzDeli.length-1) {
      statement +=[i+1] + ". " +katzDeli[i]
    }
    else {
      statement += [i+1] + ". " +katzDeli[i] + ", "
    }
    }
  }
  return statement;
}
