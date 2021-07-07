function takeANumber(arr, name) {
  arr.push(name)

  for (var i = 0; i <= arr.length; i++) {
    if(arr[i] === name) {
      return `Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`;
    }
  }
}

function nowServing(arr) {
  var msg = `There is nobody waiting to be served!`;

  if(arr.length >= 1) {
    msg = `Currently serving ${arr[0]}.`;
    arr.shift();
  }

  return msg;
}

function currentLine(arr) {
  var lineStatus = `The line is currently empty.`;

  if(arr.length > 0) {
    lineStatus = `The line is currently: `;

    for(var i = 0; i < arr.length; i++) {
      if(i < arr.length - 1) {
        lineStatus += `${(i + 1)}. ${arr[i]}, `;
      } else {
        lineStatus += `${(i + 1)}. ${arr[i]}`;
      }
    }
  }

  return lineStatus;
}
