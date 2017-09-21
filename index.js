var katzDeliLine = [];

const takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

const nowServing = function(katzDeliLine) {
  if (katzDeliLine[0]) {
    let firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

const currentLine = function(katzDeliLine) {
  var deliLineString = 'The line is currently:';
  if (!katzDeliLine[0]) {
    return 'The line is currently empty.';
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      deliLineString = `${deliLineString} ${i + 1}. ${katzDeliLine[i]}`;
      if (katzDeliLine[i + 1]) {
        deliLineString = deliLineString + ',';
      };
    };
    return deliLineString;
  }
}
