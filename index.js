

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving;
    serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  } else
  return "There is nobody waiting to be served!";
}

function currentLine (katzDeliLine) {
  var report = "The line is currently:";
  if (katzDeliLine.length > 0) {
    for(var i = 0; i < katzDeliLine.length; i++) {
      var j = i + 1;
      if (j === katzDeliLine.length) {
        report = report + " " + j + ". " + katzDeliLine[i];
      } else
      report = report + " " + j + ". " + katzDeliLine[i] + ",";
    }
    return report;
  } else return "The line is currently empty.";
}
