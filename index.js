var katzDeliLine = [];

function takeANumber(array, name) {
    array.push(name)
    return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${array.shift()}.`;
  }
}


function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var peopleOnLine = "";
    for (var i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        peopleOnLine =`${peopleOnLine}${i + 1}. ${array[i]}`;
      } else {
        peopleOnLine =`${peopleOnLine}${i + 1}. ${array[i]}, `;
      }
    }
    return `The line is currently: ${peopleOnLine}`;
  }
}
