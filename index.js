
function takeANumber(katzDeli, name) {
  return `Welcome, ${name}. You are number ${katzDeli.push(name)} in line.`;
}

function nowServing(line) {
  if (line.length > 0 ) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(line) {
  var string = `The line is currently:`;
  if (line.length > 0) {
    for (var i in line) {
      var realIndex = Number.parseInt(i)+1;
      string += ` ${realIndex}. ${line[i]}`;
      /*Ternary statement adds commas after all names except last one */
      realIndex < line.length ? string += ',' : string += '';
    }
    return string;
  } else {
    return `The line is currently empty.`;
  }
}