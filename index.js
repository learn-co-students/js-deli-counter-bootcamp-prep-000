function takeANumber(array, name) {
  var number = array.length + 1;
  array.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing (array) {
  if (array.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return 'The line is currently empty.';
  } else {
      var lineArray = [];
      
      for (var i = 0; i < array.length; i += 1) {
        var num = i + 1;
        var name = array[i];
        lineArray.push(' ' + num + '. ' + name);
      }
    return 'The line is currently:' + lineArray;
  }
}