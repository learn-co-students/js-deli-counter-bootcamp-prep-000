function takeANumber(katzDeliLine, name) {
  var length = katzDeliLine.length;
    katzDeliLine.push(name);
    var position = length + 1;
    return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine[0];
  var length = katzDeliLine.length;
  if (length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  var string = 'The line is currently: ';
  var length = katzDeliLine.length;
  if (length === 0) {
    string = 'The line is currently empty.';
  } else {
  for (var i = 0; i < length; i++) {
    var position = i + 1;
    var name = katzDeliLine[i];
    if (i === length - 1) {
    string = `${string}${position}. ${name}`;
  } else {
    string = `${string}${position}. ${name}, `;
  }
}
}
  return string;
}
