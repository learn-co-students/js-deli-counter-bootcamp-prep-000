//I want the person to come in.
//If the line is empty, the person will be assigned the number 1.
//If the line is not empty, the function will count the number of people in line and assign the new customer
//a positionNumber equal to 1 + the current number of people in line (1 + the current length of the line)
//

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  var greeting = `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
  return (greeting);
}

function nowServing(deliLine) {
  var newLine = deliLine;
  if (newLine.length === 0) {
    return ("There is nobody waiting to be served\!");
  }
  else {
    for (var inLinePosition = (deliLine.length); inLinePosition > 0; inLinePosition--) {
      var servingMessage = `Currently serving ${deliLine[0]}.`;
      newLine.shift(0);
      return (servingMessage);
      }
    }
  }

  function currentLine(line) {
    var listMessage = "The line is currently: ";
    var linePosition = 0;
    if (line.length === 0) {
      return ("The line is currently empty.")
    }
    else {
      for (linePosition = 0; linePosition < line.length; linePosition++) {

        if (linePosition != (line.length-1)) {
          listMessage = listMessage + `${(linePosition+1)}. ${line[linePosition]}, `;
        }

        else {
        listMessage = listMessage + `${(linePosition+1)}. ${line[linePosition]}`
        }
      }
    }

  return (listMessage);
}
