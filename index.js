function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliCurrentLine) {
  if (katzDeliCurrentLine.length === 0){
    return 'The line is currently empty.'
  }
  else {
    let m = 'The line is currently:';
  for (let i = 0;i < katzDeliCurrentLine.length-1; i++){
    m = m +` ${i+1}. ${katzDeliCurrentLine[i]},`
  }
  m = m + ` ${katzDeliCurrentLine.length}. ${katzDeliCurrentLine[katzDeliCurrentLine.length-1]}`
  return m;
}
}
