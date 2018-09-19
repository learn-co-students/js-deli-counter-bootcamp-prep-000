function takeANumber(array, name) {
  array.push(`${name}`);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  let i = 0;
  
  while (i < array.length) {
    i++;
  }
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(array) {
  var line = [];
  
  for (var i = 0; i < array.length; i++) {
    line.push(` ` + [i + 1] + `. ` + array[i]);
  }
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently:" + line;
  }
}






