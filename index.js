var katzDeli = [];

function takeANumber(array, name) {
  array.push(name)
  var str = `Welcome, ${name}. You are number ${array.indexOf(name) + 1} in line.`;
  return str;
}


function currentLine(array) {
  if (array.length > 0) {

    var str = `The line is currently:`;
    array.forEach(function(item, index, array) {
      // couldn't think of a better way to avoid the last comma
      if (index === array.length - 1) {
        str += ` ${index + 1}. ${item}`;
        } else { str += ` ${index + 1}. ${item},`; 
      }         
    });    
    
    return str;
  } else {
    return 'The line is currently empty.';
  }
}


function nowServing(array) {
  if (array.length > 0) {
    
    var str = `Currently serving ${array[0]}.`;
    array.shift();

    return str;
  } else {
    return 'There is nobody waiting to be served!';
  }
}