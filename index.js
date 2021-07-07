const katzDeliLne = [];
function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.indexOf(personName) + 1} in line.`;
}

const deliLine = ["Steven", "Blake", "Avi"];

function nowServing(deliLine){
  if(deliLine.length > 0 ) {
    return (`Currently serving ${deliLine.shift()}.`)
    } else {
    return('There is nobody waiting to be served!');
    }
}
nowServing(deliLine);

function currentLine(katzDeliLine) {
  let line = [];
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  } else {
    for(let i = 0; i < katzDeliLine.length; i++){
      line.push(`${i + 1}. ${katzDeliLine[i]}`);  
    }
  }
  return `The line is currently: ${line.join(', ')}`;
}
currentLine(["Bill", "Jane", "Ann"]);
