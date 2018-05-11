var katzDeli = [];

function takeANumber(KatzDeliLine, name){
  KatzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${KatzDeliLine.length} in line.`;
}


function nowServing(KatzDeliLine, name){
  if(KatzDeliLine.length > 0){
   return `Currently serving ${KatzDeliLine.shift(name)}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line){
  if(line.length > 0){
    var inLine = "The line is currently:";
    for(var i = 0; i < line.length; i++){
      inLine += ` ${i+1}. ${line[i]},`;
    }
    return inLine.slice(0, inLine.length - 1);
    
  } else {
    return "The line is currently empty.";
  }
}

