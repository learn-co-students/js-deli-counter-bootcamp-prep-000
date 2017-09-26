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
  var visitorStatus = `The line is currently empty.`;

  if(arr.length > 0) {
    visitorStatus = `The line is currently: `;

    for(var i = 0; i < arr.length; i++) {
      if(i < arr.length - 1) {
        visitorStatus += `${(i + 1)}. ${arr[i]}, `;
      } else {
        visitorStatus += `${(i + 1)}. ${arr[i]}`;
      }
    }
  }

  return visitorStatus;
}
