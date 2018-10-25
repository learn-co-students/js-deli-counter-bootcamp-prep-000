
function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  var name = array[0];
  if(array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    array.shift(name);
    return `Currently serving ${name}.`;
  }
}

function currentLine(array) {
  var nameString = "The line is currently: ";
  if(array.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < array.length; i++) {
      if(i == array.length - 1) {
        nameString += `${[i + 1]}. ${array[i]}`;
      } else {
        nameString += `${[i + 1]}. ${array[i]}, `;
      }
    }
  return nameString;
  }
}