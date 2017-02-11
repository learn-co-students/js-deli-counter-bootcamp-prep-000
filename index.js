var katzDeliLine = [];
var takeANumber = function(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.indexOf(name) + 1} in line.`;
};
var nowServing = function(array) {
var firstPosition = array[0];
if (array.length > 0) {
  array.shift(firstPosition);
  return `Currently serving ${firstPosition}.`;
} else {
  return "There is nobody waiting to be served!";
}
};

var currentLine = function(line) {
var myArray = []
  if (line.length > 0) {
    for (let i = 0; i < line.length; i++) {
      myArray.push (` ${i+1}. ${line[i]}`)
    };
    return "The line is currently:" + myArray
  } else {
    return "The line is currently empty."
  }
};
