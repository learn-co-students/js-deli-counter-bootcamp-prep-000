function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(arr) {
  if(arr[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + arr.shift(0) + ".";
  }
}

function currentLine(arr) {
  var message = "";
  if(arr.length === 0) {
    message = "The line is currently empty.";
  } else {
    message += "The line is currently: ";
    for(var i = 0; i < arr.length; i ++) {
      if(i < arr.length - 1) {
        message += (i+1) +". " + arr[i] + ", ";
      } else {
        message += (i+1) +". " + arr[i];
      }
    }

  }
  return message;
}
