function takeANumber(lineArray, name) {
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`;
}

function nowServing(lineArray) {
  if (lineArray.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + lineArray.shift() + ".";
  }
}

function currentLine(lineArray) {
  let str = "The line is currently: ";
  
  if (lineArray.length === 0) {
    return "The line is currently empty.";
  }
  
  for (let i = 0; i < lineArray.length - 1; i++) {
    str += `${i + 1}. ${lineArray[i]}, `;
  }
  
  str += `${lineArray.length}. ${lineArray[lineArray.length -1]}`;
  
  return str;
}