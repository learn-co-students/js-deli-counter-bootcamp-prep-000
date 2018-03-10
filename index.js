var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(line) {
  if(line.length === 0) {
    return('There is nobody waiting to be served!');
  }
  else {
    var name = line.shift();
    return(`Currently serving ${name}.`);
  }
}

function currentLine(list) {
  var newlist = [];
   if (list.length === 0) {
     return("The line is currently empty.");
   }
   for (var i = 0; i < list.length; i++) {
     newlist.push(` ${i+1}. ${list[i]}`);
 	}
   return "The line is currently:" + newlist;
}