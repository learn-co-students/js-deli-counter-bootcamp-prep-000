var katzDeliLine = []; // start of day, no line.

function takeANumber(line, name){
 line.push(name);  
 var position = line.length;
 return(`Welcome, ${name}. You are number ${position} in line.`);
}

function nowServing(line){
  // return first person  in line and remove them from the line
  // line = 0 => "There is nobody waiting to be served"
  if(line.length === 0){
    return 'There is nobody waiting to be served!';
  }else{
    var serving = `Currently serving ${line[0]}.`;
    line.shift();
    return serving;
  }
  
}

function currentLine(line){
  // returns the current line e.g. "The line is currently: 1. Ada, 2. Grace"
  // line = 0 => "The line is currently empty"
  var lineString = 'The line is currently: ';
  if(line.length === 0){
    return 'The line is currently empty.';
  }else{
    for(var i = 0; i < line.length-1; i++){
      lineString += `${i+1}. ${line[i]}, `;
    }
    lineString += `${line.length}. ${line[line.length-1]}`;
    return lineString;
  }
  
}