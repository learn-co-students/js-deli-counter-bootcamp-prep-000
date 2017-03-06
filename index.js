
function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}
function nowServing(array) {
  if (array.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${array.shift()}.`;
  }
}
function currentLine(array) {
  var strLine = `The line is currently:`;
  for (var i = 0; i <= array.length ; i++) {
    if (array.length === 0) {
      strLine = strLine.slice(0,strLine.length - 1) + ` empty.,`;
    }
    else if (i < array.length ) {
      strLine = strLine + ` ${i+1}. ${array[i]},`;
    }
  }
  return strLine.slice(0,strLine.length - 1);
}

