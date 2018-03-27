var katzDeli = [];
var katzDeliLine = [];
var otherDeli = [];
var otherDeliLine = [];

function takeANumber(m, name){
  m.push(name);
  return "Welcome, " + name + ". " + "You are number " + ((m.length)) + " in line.";
}

function nowServing(n) {
  if (n.length > 0) {
  return "Currently serving " + (n.shift(0,1)) + ".";
  }
  else {
  (n.length === 0); 
    return "There is nobody waiting to be served!";
  }
}

function currentLine(p) {
  var lineCurrent = [];
  if (p.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < p.length; i++) {
      lineCurrent[i] = " " + (i + 1) + ". " + p[i];
    }
 
    return "The line is currently:" + lineCurrent;
  }
}


