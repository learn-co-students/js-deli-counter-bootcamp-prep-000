function takeANumber(currentline, name) {
  currentline.push(name);
  var position  = currentline.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(currentline) {
  if (currentline.length > 0){
    while (currentline.length > 0) {
      var nameServed = currentline[0];
      currentline.shift();
      return `Currently serving ${nameServed}.`;
    }
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currentline) {
  if (currentline.length > 0) {
    var countdown = currentline.length;
    var response = "The line is currently: ";
    var list = [];
    var numName = "";
    while (countdown > 0) {
      if (countdown === 1) {
        numName = `${countdown}. ${currentline[countdown - 1]}`;
        list.unshift(numName);
        countdown = countdown - 1;
      } else {
        numName = ` ${countdown}. ${currentline[countdown - 1]}`;
        list.unshift(numName)
        countdown = countdown  -1;
      }
    }
    return response + list;
  } else {
    return "The line is currently empty.";
  }
}