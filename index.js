var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var welcomeString = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return welcomeString;
}

function nowServing(arr) {
  if (arr.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = arr.shift(1);
    return `Currently serving ${serving}.`;
  }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return "The line is currently empty.";
  } else {
    var message = "The line is currently: ";
    var arrayLength = arr.length;
    for (var i = 0; i < arrayLength; i++) {
      if (i === arrayLength - 1) {
        message += `${i + 1}. ${arr[i]}`;
      } else
        message += `${i + 1}. ${arr[i]}, `;
      }
    return message;
  }
}