// var katzDeliLine = []

function takeANumber(lineName, name){
  lineName.push(name);
  for (var i = 1; i <= lineName.length; i++) {
    return (`Welcome, ${name}. You are number ${lineName.length} in line.`);
  }
}

function nowServing (lineName) {
  var x = lineName.length;
  
  if (x === 0) {
    return ("There is nobody waiting to be served!");    
  }
  else {
    return (`Currently serving ${lineName.shift()}.`);
  }
}

function currentLine(line) {
  var len = line.length;
  if (len === 0) {
    return "The line is currently empty.";
  } else {
    var x = "The line is currently: ";
    for (var i = 0; i < len; i++) {
      if (i === 0) {
        x += ((i + 1) + ". ") + line[i];
      } else {
        x += ", " + ((i + 1) + ". ") + line[i];
      }
    }
    return x;
  }
}