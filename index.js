
function takeANumber(array, name) {
  array.push(name);
  var positionInLine = array.indexOf(name);
  return `Welcome, ${name}. You are number ${positionInLine + 1} in line.`
}

function nowServing (array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentCust = array.shift();
    return `Currently serving ${currentCust}.`;
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineDescrip = "The line is currently: ";
    for (let i = 0; i < array.length; i++) {
      lineDescrip += `${i + 1}. ${array[i]}${i === array.length - 1 ? "" : ", "}`;
    }
    return lineDescrip;
  }
}
