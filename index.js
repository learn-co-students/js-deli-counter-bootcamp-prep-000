var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli,name) {
  while (katzDeli.length > 0) {
    otherDeli = [...otherDeli, name];
  var position = otherDeli.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
  }
}

<<<<<<< HEAD
function nowServing(deliLine){
  for (var i=0; i < (deliLine.length -1); i++) {
  var name = deliLine[i];
  return `Currently serving ${name}.`;
  }
=======
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
>>>>>>> 120f4fbbe821d9e80cbe0950e082a614967fa395
}

function currentLine(otherDeli){
  if(otherDeli.length > 0){
    for (var i = 0; i <= (otherDeli.length - 1); i++){
      var position = i + 1;
<<<<<<< HEAD
      currentLine = [...currentLine,` ${position}. ${line[i]}`];
=======
      var currentLine = [...currentLine,` ${position}. ${otherDeli[i]}`];
>>>>>>> 120f4fbbe821d9e80cbe0950e082a614967fa395
    }
    return `The line is currently: ${currentLine}`;
  } else {
    return "The line is currently empty."
  }
}
