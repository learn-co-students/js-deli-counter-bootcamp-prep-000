var katzDeliLine = [];
var katzDeli = [];
var otherDeli = [];

function takeANumber (deli, name){
  deli.push(name)
  katzDeliLine.push(katzDeli)
  var length = deli.length
  return 'Welcome, ' + deli[(length - 1)] + '. You are number ' + length + ' in line.'
}

function nowServing(deli){
if (deli.length === 0){
  return 'There is nobody waiting to be served!'}
else {
  return 'Currently serving ' + deli.shift() + '.'
}
}

function currentLine(deli){
if (deli.length === 0){
  return 'The line is currently empty.'}
  else {
      return 'The line is currently: 1. ' + deli[0] + ', 2. ' + deli[1] + ', 3. ' + deli[2]
  }
}
