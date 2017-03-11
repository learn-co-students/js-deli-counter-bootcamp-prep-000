
function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  var person = "";
  if (array.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    person = array.shift();
    return `Currently serving ${person}.`;
  }
}

function currentLine(array) {
  var strings = "";
  if (array.length == 0) {
    strings = "The line is currently empty.  ";
  } else {
    strings = "The line is currently: ";
    for (var i = 0; i < array.length; i++){
      strings += i+1 + ". " + array[i] + ", ";
    }
  }
  strings = strings.slice(0,-2);
  return strings
}
