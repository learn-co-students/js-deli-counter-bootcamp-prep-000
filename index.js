var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'The line is currently empty.';
  } else {
    var i,
        list = 'The line is currently:',
        l = katzDeliLine.length;
    for (i = 0; i < l; i++) {
      if (list === 'The line is currently:') {
        list += ` ${i + 1}. ${katzDeliLine[i]}`;
      } else {
        list += `, ${i + 1}. ${katzDeliLine[i]}`;
      }
    }
    return list;
  }
}
