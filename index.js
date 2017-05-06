var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli,name) {
  while (katzDeli.length > 0) {
    otherDeli = [...otherDeli, name];
  var position = otherDeli.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
  }
}

function nowServing(otherDeli){
  if (otherDeli.length > 1) {
    for (var i=0; i < (otherDeli.length -1); i++) {
      var name = otherDeli[i];
      otherDeli.shift();
      return `Currently serving ${name}.`;
        }
      } else {
      return 'There is nobody waiting to be served!'
    }
}

function currentLine(otherDeli){
  if(otherDeli.length > 0){
    for (var i = 0; i <= (otherDeli.length - 1); i++){
      var position = i + 1;
      var currentLine = [...currentLine,` ${position}. ${otherDeli[i]}`];
    }
    return `The line is currently: ${currentLine}`;
  } else {
    return "The line is currently empty."
  }
}
