var takeANumber = (katzDeliLine, newName) => {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = katzDeliLine => {
  return (katzDeliLine.length > 0) ? `Currently serving ${katzDeliLine.shift()}.` : 'There is nobody waiting to be served!';
}

var currentLine = katzDeliLine => {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    var result = 'The line is currently:';
    for (var i = 0; i < katzDeliLine.length; i++) {
      result += ` ${i + 1}. ${katzDeliLine[i]}`;
      if (i < katzDeliLine.length - 1) {
        result += ',';
      }
    }
  }
  return result;
}