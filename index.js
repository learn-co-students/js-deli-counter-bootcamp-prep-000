function takeANumber(deliLine, name) {
  var length = deliLine.push(name);
  return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var firstInLine = deliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  
  var line = "The line is currently: ";
  for(var i = 0; i < deliLine.length; i++){
    var position = `${i+ 1}. ${deliLine[i]}`;
    var comma = ', ';
    if(i === deliLine.length - 1){
      comma = '';
    }
    line = line + position + comma;
  }
return line;

}