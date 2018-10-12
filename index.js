function takeANumber(line,name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(currentLine) {
  var string = 'The line is currently:';
  if (currentLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (let i=0;i<currentLine.length;i++) {
      if (i === (currentLine.length-1)) {
        string = string + ` ${(i+1)}. ${currentLine[i]}`;
      } else {
        string = string + ` ${(i+1)}. ${currentLine[i]},`;
      }
    }
  }
  return string;
}