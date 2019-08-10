function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  return array.length > 0 ? `Currently serving ${array.shift()}.` : `There is nobody waiting to be served!`;
}

function currentLine(line) {
  var str = "The line is currently: "
  if(line.length > 0) {
    for(let i = 1; i<line.length;i++) {
      str += `${i}. ${line[i-1]}, `;
    }
    str += `${line.length}. ${line[line.length - 1]}`; 
  } else {
    str = "The line is currently empty."
  }
  return str;
}