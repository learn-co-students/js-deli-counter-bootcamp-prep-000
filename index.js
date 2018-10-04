function takeANumber(deliLine, newPerson) {
  deliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`;
  }
  
function nowServing(deliLine) {
  if (deliLine < 1) {
    return 'There is nobody waiting to be served!';
  } else {return `Currently serving ${deliLine.shift()}.`}
}

function currentLine(deliLine) {
  if (deliLine.length < 1) { 
    return 'The line is currently empty.';
  }
    var people = '';
  for ( var i = 0; i < deliLine.length; i++) {
    var line = `${i+1}. ${deliLine[i]}`;
    var comma = '';
    if (i + 1 < deliLine.length) {
    comma = ', ';
  }
    people += line + comma;
  }
  return 'The line is currently: ' + people;
}
