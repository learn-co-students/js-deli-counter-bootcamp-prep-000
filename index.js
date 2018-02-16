function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var  position = katzDeli.length;
     return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line) {
  var katzDeli = line;
  var orderReady = katzDeli[0];
  var nowServingString = `Currently serving ${orderReady}.`;
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  katzDeli.shift();
  return nowServingString;
    }
}

function currentLine(line) {
  var copyOfLine = line.slice(0);
  var howMany = copyOfLine.length;
  var n = 1;
  var numberedLine = 'The line is currently:';
  for (var i = 0; i < howMany; i++) {
    if (howMany === 0) {
      return "The line is currently empty.";
    }
    var firstLine = copyOfLine[0];
    numberedLine += ` ${n++}. ${firstLine},`;
    copyOfLine.shift();
  }
  if (line.length > 0) {
    return numberedLine.slice(0, -1);
  }
}

function currentLine(line) {
  var copyOfLine = line.slice(0);
  var howMany = copyOfLine.length;
  var n = 1;
  var numberedLine = 'The line is currently:';
  var empty = "The line is currently empty.";
  for (var i = 0; i < howMany; i++) {
    var firstLine = copyOfLine[0];
    numberedLine += ` ${n++}. ${firstLine},`;
    copyOfLine.shift();
  }
  if (line.length > 0) {
    return numberedLine.slice(0, -1);
  } else {
    return empty;
  }
}