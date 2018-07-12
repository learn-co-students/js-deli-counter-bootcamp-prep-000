var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  var katzDeliCountdown = katzDeliLine.length - 1;
  var lineList;
  var countUp = 1;
  var arrayCountUp = 0;
  if(katzDeliLine.length > 0) {
    lineList = `${countUp}. ${katzDeliLine[arrayCountUp]},`;
    countUp++
    arrayCountUp++
    while(katzDeliCountdown > 1) {
      lineList = `${lineList} ${countUp}. ${katzDeliLine[arrayCountUp]},`;
      countUp++;
      arrayCountUp++;
      katzDeliCountdown--;
    }
    lineList = `${lineList} ${countUp}. ${katzDeliLine[arrayCountUp]}`;
    return `The line is currently: ${lineList}`;
  } else if(katzDeliLine.length === 0) {
      return `The line is currently empty.`;
    }
}