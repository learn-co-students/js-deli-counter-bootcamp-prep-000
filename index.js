var katzDeli = [];

var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
};

var nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  };
  return `Currently serving ${katzDeliLine.shift()}.`
};

var currentLine = (katzDeliLine) => {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  };

  var numbersAndNames = [];

  for (var i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`);
  };

  return `The line is currently: ${numbersAndNames.join(', ')}`;
};
