var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length > 0){
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
    
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length>0){
    var i = 0;
    var queue = `The line is currently: `;
    
    while (i<katzDeliLine.length) {
      var name = katzDeliLine[i];
      ++i;

      if (katzDeliLine.length===i) {
        queue += `${i}. ${name}`;
      } else {
        queue +=`${i}. ${name}, `;
      }
    }
    return queue;
  } else {
    return `The line is currently empty.`;
  }
}