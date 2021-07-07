var katzDeliLine = [];

function takeANumber(currentLine, name) {

  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;

}

function nowServing(currentLine) {

  if (currentLine.length > 0) {

    var tempCustomer = currentLine[0];
    currentLine.shift();
    return `Currently serving ${tempCustomer}.`;

  } else {

    return `There is nobody waiting to be served!`;

  }

}

function currentLine(currentLine) {

  var lineString = `The line is currently: `;

  if (currentLine.length > 0) {

    currentLine.forEach(function(element, index) {

      lineString += `${currentLine.indexOf(element) + 1}. ${element}${index === currentLine.length -1 ? "" : ", "}`;

    });

  } else {

    lineString = `The line is currently empty.`;

  }

  return lineString;

}
