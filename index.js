var katzDeli = [];

function takeANumber (array, name) {
  array.push(name);
  var position = array.length;
  return (`Welcome, ${name}. You are number ${position} in line.`);
}

function nowServing (array) {
  if (array.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
    var first = array[0];
    array.shift();
    return (`Currently serving ${first}.`);
  }
}

function currentLine (array) {
  var list = ("The line is currently:");
  if (array.length === 0) {
    return ("The line is currently empty.");
  }
  else {
    list = list + (` ${1}. ${array[0]}`);
    for (var i = 1; i < array.length; i++) {
      list = list + (`, ${i+1}. ${array[i]}`);
    }
    return list;
  }
}