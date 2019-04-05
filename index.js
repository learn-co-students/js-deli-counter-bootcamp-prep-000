
function takeANumber(currentLinePeople, personName){
  currentLinePeople.push(personName);
  return `Welcome, ${personName}. You are number ${currentLinePeople.length} in line.`;
};

function nowServing(arrayDeli){
  const arrLen = arrayDeli.length;
  if (arrLen === 0){
    return `There is nobody waiting to be served!`;
  }
  let arrayPreservedServed = arrayDeli [0]
  arrayDeli.shift()
  return `Currently serving ${arrayPreservedServed}.`;
};

function currentLine(currentLinePeople){
  const arrLen = currentLinePeople.length;
  if (arrLen === 0){
    return `The line is currently empty.`;
  };
  let indexAndValues = [];
  for(let x = 0; x < currentLinePeople.length; x++){
    indexAndValues.push(` ${x + 1}. ${currentLinePeople[x]}`);
  };
  return `The line is currently:${indexAndValues}`;
};
