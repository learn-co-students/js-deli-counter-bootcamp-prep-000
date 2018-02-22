
var katzDeli = [];

function takeANumber(line, name) {
line.push(name);
console.log ('Welcome, ' + name + '. You are number ' + line.length + ' in line.');
return 'Welcome, ' + name + '. You are number ' + line.length + ' in line.';
}

function nowServing(line) {
if(line.length === 0) {
  console.log ("There is nobody waiting to be served!");
  return "There is nobody waiting to be served!";
}
else {
  return `Currently serving ${line.shift}.`;
}
}

function currentLine(line) {
if(!line.length) {
  return "The line is currently empty.";
}
var peopleinline= [];
for (var i=0; i<line.length; i++) {
  peopleinline.push(i+1 + ". " + line[i]);
}
console.log('The line is currently: ' + peopleinline);
return "The line is currently: " + peopleinline.join(', ');
}
