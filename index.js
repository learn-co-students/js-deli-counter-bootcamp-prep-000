
function takeANumber(katzDeliLine, name) {
  
  katzDeliLine.push(name);
  
  var i = katzDeliLine.length;
  
  return `Welcome, ${name}. You are number ${i} in line.`;
}


  
function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    
    return "There is nobody waiting to be served!";
    
    } else {

    return `Currently serving ${katzDeliLine.shift()}.`;
    
    }
  }
  
  
  function currentLine(katzDeliLine) {
    
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
    }
    
    for (let i = 0; i < katzDeliLine.length; i++) {
      katzDeliLine[i] = `${i+1}. ${katzDeliLine[i]}`;
    }
    return `The line is currently: ${katzDeliLine.join(', ')}`;
  }
  
  
  
  
  
  
  
  


/*function  currentLine(katzDeliLine) {
  
  if(katzDeliLine.length === 0){
      return 'The line is currently empty.'

  }
  let msg = ''
  
  for(let i = 0; i < katzDeliLine.length; i++){
    if(i > 0){
      msg += ', '
    }
    msg += (i + 1) + '. ' + katzDeliLine[i]
  }
  
  return 'The line is currently: ' + msg
  
}*/




