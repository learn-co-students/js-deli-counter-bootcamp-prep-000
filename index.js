var katzDeliLine = [];
function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
};

function nowServing(x) {
  if (x.length > 0) {
  return `Currently serving ${x.shift()}.`
}
else {
  return `There is nobody waiting to be served!`
};
};
function currentLine(x) {
  var y = [];
  if (x.length > 0) {
    for (var i= 0 ; i < x.length; i++) {
      y.push (` ${parseInt(i) + 1}. ${x[i]}`)
    }
    return `The line is currently:${y}`
  }
  else{
    return "The line is currently empty."
  }
}
