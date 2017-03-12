function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length) {
    var lineAnnouncement = 'The line is currently:';
    for (var i = 0; i < line.length; i++) {
      lineAnnouncement += ` ${i + 1}. ${line[i]},`
    }
    return lineAnnouncement.slice(0, lineAnnouncement.length - 1);
  } else {
    return 'The line is currently empty.';
  }
}