var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var position = katzDeli.length;
  return "Welcome, " + name + ". " + "You are number " + position + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = deliLine.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
  var array = [];
    if (line.length === 0) {
      return "The line is currently empty.";
    } else {
      for (var i = 0; i < line.length; i++) {
        array.push( i+1 + ". " + line[i] );
    }
    return "The line is currently: " + array.join(", ") ;
  }
}