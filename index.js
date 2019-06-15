var katzDeli = [];
var katzDeliLine = [];

function takeANumber(arr, name) {
  arr.push(name);
  return (
    'Welcome, ' +
    name +
    '. You are number ' +
    (arr.indexOf(name) + 1) +
    ' in line.'
  )
}
function currentLine(arr) {
  var empty = [];
  if (arr.length < 1) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < arr.length; i++) {
      empty.push(arr.indexOf(arr[i]) + 1, '. ', arr[i], ', ');
    }
    if (empty.endsWith(",")) {
  empty = empty.substring(0, empty.length() - 1);
}
    
    return 'The line is currently: ' + empty.join('');
  }
}


function nowServing(arr) {
  var firstPerson = [];
  if (arr.length < 1) {
    return 'There is nobody waiting to be served!';
  } else {
    firstPerson.push(arr[0]);
    arr.shift();
    return 'Currently serving ' + firstPerson[0] + '.';
  }
}