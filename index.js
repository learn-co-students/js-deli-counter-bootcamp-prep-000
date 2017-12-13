var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var array = [];
    let num = 1;
    for(let i = 0; i < katzDeliLine.length; i++){
      array.push(`${num}. ${katzDeliLine[i]}`);
      num++;
    }
    return "The line is currently: " + array.join(', ');
  }
  else{
      return 'The line is currently empty.';
  }
}
