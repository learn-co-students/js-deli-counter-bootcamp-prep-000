function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}

function nowServing(deliLine, name) {
  if (deliLine[0] === undefined) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${deliLine.shift([0])}.`
  }
}

function currentLine(deliLine) {
  if (deliLine[0] === undefined) {
    return 'The line is currently empty.';
  } else {
    for (let i = 0; i < deliLine.length; i++) {
      deliLine[i] = ' ' + (i + 1) + '. ' + deliLine[i];
    }
    return 'The line is currently:' + deliLine.toString();
  }

}
