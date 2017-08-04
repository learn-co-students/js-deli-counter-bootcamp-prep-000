var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.');
}

function nowServing (x) {
if (x.length === 0 ){
  return 'There is nobody waiting to be served!';
} else {
   return ('Currently serving ' + x.shift() + '.');
  }
}




function currentLine(line){
if (!line.length){
  return "The line is currently empty.";
}
var newLine = [];

for (var i = 0; i < line.length; i ++){
    newLine.push(i+1 + ". " + line[i]);
  }
    
    return "The line is currently: " + newLine.join(', ');
}
