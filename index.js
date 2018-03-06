var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    var name = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${name}.`
    
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){

  if(katzDeliLine.length>0){
    var i = 0;
    var que = "The line is currently: ";
    
    while(i<katzDeliLine.length){
    var name = katzDeliLine[i];
    ++i;
    
    if(katzDeliLine.length===i){
        que += `${i}. ${name}`;
      }else{
        que += `${i}. ${name}, `;
      }
    }
    return que;
  }else{
    return "The line is currently empty.";
  }
  
}