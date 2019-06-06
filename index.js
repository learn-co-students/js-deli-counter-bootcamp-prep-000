function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(){
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
}
}

function currentLine(katzDeliLine){
  var startString = `The line is currently:`;
  let i = 0;
  for(i; i < katzDeliLine.length -1;i++){
    startString += `${katzDeliLine[i]}.${name},`;
  }
  return startString += `${katzDeliLine.length}. ${name}.`;
}