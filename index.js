var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
 if (array.length > 0) {
    return "Currently serving " + array.shift() + ".";
} else {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  if (array.length > 0) {
    var line = []
    var lineL = array.length;
    for (var i = 0; i < lineL; i++) {
     line.push(" " + [i+1] + ". " + array[i])
    }
    return "The line is currently:" + line
  } else {
    return "The line is currently empty."
  }
}
