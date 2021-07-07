var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

function nowServing(katzDeliLine){
  if(katzDeliLine.length !== 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine){
  var array = [];
    if(katzDeliLine.length !== 0){
      for(let i=0; i < katzDeliLine.length; i++){
        i === 0 ? array.push(`${i + 1}. ${katzDeliLine[i]}`) :
        array.push(` ${i + 1}. ${katzDeliLine[i]}`);
        
      }
      return `The line is currently: ${array}`;
     
  }else{
    return 'The line is currently empty.';
  }
}


