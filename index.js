var katzDeliLine = [];

var takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
};

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var currentName = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return currentName;
  }
};

var currentLine = function(katzDeliLine) {
  let finalString = 'The line is currently: ';
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let i = 0;
    do {
      finalString = finalString + `${i + 1}. ${katzDeliLine[i]}, `;
      i++;
    } while (i < katzDeliLine.length - 1);
  }
  finalString = finalString + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
  return finalString;
};