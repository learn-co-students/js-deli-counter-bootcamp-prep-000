function takeANumber(line, name){
  line.push(name);
    
    return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine){
    if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(line){
  if (!line.length) {
    return "The line is currently empty.";
  }

  const lineNumnberAndName = [];

  for (let i = 0, l = line.length; i < l; i++) {
    lineNumnberAndName.push(`${i + 1}. ${line[i]}`);
  }

  return `The line is currently: ${lineNumnberAndName.join(', ')}`;
}
  