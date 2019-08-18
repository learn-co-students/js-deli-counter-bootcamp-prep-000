const takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
};

const nowServing = (katzDeliLine) => {
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  } else {
    var nextPerson = katzDeliLine[0];
    katzDeliLine.shift();
  }
  return `Currently serving ${nextPerson}.`;
};

const currentLine = (line) => {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    let currLine = [];
    let idx = 0;
    while (currLine.length < line.length){
      currLine.push(`${idx + 1}. ${line[idx]}`); 
      idx++;
    }
    
    return `The line is currently: ${currLine.join(", ")}`; 
  }
};