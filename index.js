function takeANumber(array, name) {
  var position = array.length + 1;
  array.push(name);
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.'
}
function nowServing(array) {
  if (array.length===0) {
    return "There is nobody waiting to be served!"
  }
    var name = array.shift()
    return 'Currently serving ' + name + '.'
}
function currentLine(array) {
  if (array.length===0) {
    return "The line is currently empty."
  }
  var stringi = 'The line is currently: 1. ' + array[0];
  for(var i = 1; i<array.length; i++) {
    stringi += ', ' + parseInt(i+1) + '. ' + array[i];
  }
  return stringi
}
