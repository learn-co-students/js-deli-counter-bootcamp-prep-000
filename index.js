function takeANumber(array, name) {
  var length = array.length;
    array.push(name);
    return `Welcome, ${name}. You are number ${length + 1} in line.`
}

function nowServing(array) {
  var name = array[0];
  var length = array.length;
  if (length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    array.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(array) {
  var string = 'The line is currently: ';
  var length = array.length;
  if (length === 0) {
    string = 'The line is currently empty.';
  } else {
  for (var i = 0; i < length; i++) {
    var position = i + 1;
    var name = array[i];
    if (i === length - 1) {
    string = `${string}${position}. ${name}`;
  } else {
    string = `${string}${position}. ${name}, `;
  }
}
}
  return string;
}
