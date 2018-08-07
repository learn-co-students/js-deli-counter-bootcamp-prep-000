function currentLine(line){
  if(!line.length){
    return "The line is currently empty.";
  }
    const lineNumAndName = [];
    for (let i = 0, l = line.length; i < l; i++){
      lineNumAndName.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${lineNumAndName.join(', ')}`;
}

function takeANumber(linePos, name){
  linePos.push(name);
  return `Welcome, ${name}. You are number ${linePos.length} in line.`;
}

function nowServing(line){
  if (!line.length){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}