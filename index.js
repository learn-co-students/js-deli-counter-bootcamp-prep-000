var katzDeliLine = [];
function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}
function nowServing(array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(array) {
  var end = "The line is currently: ";
  for (var i = 0; i <= array.length; i++) {
    if (i+1 < array.length) {
      end = end.concat(`${i+1}. ${array[i]}, `)
    } else if (i+1 === array.length) {
      end = end.concat(`${i+1}. ${array[i]}`)
    } else if (array.length === 0) {
      end = "The line is currently empty.";
    }
  }
  return end;
}