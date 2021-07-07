//funkshion 1...RRREEEDDDD LLLIIIGGGHHHTTT
var katzDeli = [];
var katzDeliLine = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, name) {
  (katzDeli.length === 0)
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

//funkshion 2... let's do dis bwoyy!!!!!! 

var emptyDeli = [];
var otherDeli = ['Steven', 'Blake', 'Avi'];

function nowServing(otherDeli) {
  if (otherDeli.length > 0) {
    var message = `Currently serving ${otherDeli[0]}.`;
    otherDeli.shift();
    return message;
  } else if (emptyDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  } 
}

//funkshion 3...GREEEEENNN LIIIIGGGHHHHHTTTT

var line = [];
var fullLine = ['Bill', 'Jane', 'Ann'];

function currentLine(line) {
  if (line.length === 0) {
     var emptyMessage = 'The line is currently empty.';
     return emptyMessage;
  }

  else if (fullLine.length > 0) {
    var comma = []
    var message = 'The line is currently: '
    for(let i = 0; i < line.length; i++) {
      comma.push(`${(i + 1)}. ${line[i]}`)
    }
  } return (message + comma.join(', '))
} 



