function takeANumber(katzDeliLine,name){
  var newLine = katzDeliLine;
  newLine.push(name);

  return (`Welcome, ${name}. You are number ${newLine.indexOf(name)+1} in line.`);
  
  
}

function nowServing(deliLine){
  var name = deliLine[0];
  
  if (deliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  
  else{
    deliLine.shift()
    return `Currently serving ${name}.`;
    
  }
  
}

function currentLine(katzDeliLine){
  var result = 'The line is currently:';
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  for (let i = 0; i < katzDeliLine.length; i++){
    
    if (i === (katzDeliLine.length - 1)){
      result += ` ${i+1}. ${katzDeliLine[i]}`;
    }
    else {
      result += ` ${i+1}. ${katzDeliLine[i]},`;
    }
    
  
  }
  return result;
}