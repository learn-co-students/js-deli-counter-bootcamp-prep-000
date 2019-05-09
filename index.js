function takeANumber(people, newPerson) {
  people.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${people.length} in line.`;
}

function nowServing(katzDeliLine) {
  let currentPerson = katzDeliLine[0];
    
  katzDeliLine.shift();
  
  return katzDeliLine.length === 0 ? 'There is nobody waiting to be served!': `Currently serving ${currentPerson}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let numberedLine = ['The line is currently: '];
    
    for (let i=0;i<katzDeliLine.length;i++) {
      let newNumber = i+1;
      
      numberedLine.push(`${newNumber}. ${katzDeliLine[i]}`);
      
      if (i<katzDeliLine.length - 1){
        numberedLine.push(', ');
      }
    }
  
    return numberedLine.join('');
  }
}