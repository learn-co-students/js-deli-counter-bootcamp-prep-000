var katzDeli = [];

var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = katzDeliLine => {

  if (katzDeliLine.length > 0) {
    var upNext = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${upNext}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

var currentLine = katzDeliLine => {

  if (katzDeliLine.length > 0) {
    var whatIsLine = 'The line is currently:'
    for (var i = 0; i < katzDeliLine.length; i++)
    {
      whatIsLine = whatIsLine + ' ' + `${i+1}. ${katzDeliLine[i]}`
      if (i != katzDeliLine.length - 1)
      {
        whatIsLine = whatIsLine + ','
      }
    }

    return whatIsLine;
} else {
    return "The line is currently empty."
  }
}
