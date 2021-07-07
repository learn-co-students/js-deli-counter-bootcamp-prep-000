function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if (array.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(array) {
 var newArray = [];
  if (array.length === 0) {
    return `The line is currently empty.`;
  } else {
    for (var n = 0; n < array.length; n++) {
      newArray.push(` ${n+1}. ${array[n]}`);
    } return `The line is currently:${newArray}`;
  }
}