


var takeANumber = function(theLine, newPerson) {
    if (theLine.length > 0);
     theLine.push(newPerson);
     return ('Welcome, ' + newPerson + '. You are number ' + theLine.length + ' in line.');
};


var nowServing = function(theLine) {
  if (theLine.length === 0) {
    return (`There is nobody waiting to be served!`);
  }
  var person = theLine.shift();
  return (`Currently serving ` + person + `.`);
};

var currentLine = function(theLine) {
  if(theLine.length === 0) {
    return ("The line is currently empty.");
  }
  var whoIsInLine = [];
  for(var i = 0; i < theLine.length; i++) {
    whoIsInLine.push((i+1) + ". " + theLine[i]);
  }
  return ("The line is currently: " + whoIsInLine.join(", "));
};