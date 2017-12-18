function takeANumber (katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing (line) {
  return line.length === 0 ?
   "There is nobody waiting to be served!" :
   `Currently serving ${line.shift()}.`;
}


function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineString = "The line is currently: ";
    line.forEach(function(person, i){
      if(i === line.length - 1) {
          lineString += `${i + 1}. ${person}`;
      } else {
          lineString += `${i + 1}. ${person}, `;
      }
    })
    return lineString;
  }
}
