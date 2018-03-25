var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(arr) {
  if (arr.length === 0) {
    return "There is nobody waiting to be served!"
  } else { 
    return 'Currently serving ' + arr.shift() + "."
  }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return "The line is currently empty."
  } else {
    var astr = "The line is currently: "
    for (var i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        astr += `${i + 1}. ${arr[i]}, `;
      } else {
        astr += `${i + 1}. ${arr[i]}`;
      }
    }
  }
  return astr
}