// var katzDeliLIne = [];

function takeANumber(lineArray, name) {
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift(0)}.`;
  }else 
    return 'There is nobody waiting to be served!';
}

function currentLine(katzLine){
  let i = 0;  
  let line = [];
  while(i < katzLine.length){
    line.push( `${ i+1 }. ${ katzLine[i] }`);
    i++;
  
    
  }if(katzLine.length === 0){
    return 'The line is currently empty.';
  
  }else 
  return `The line is currently: ${line.join(', ')}`;
  
}

