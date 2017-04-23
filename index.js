function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  var msg = "The line is currently:";
  if(line.length === 0){
    return "The line is currently empty.";
  } else {
      for(var i = 0; i < line.length; i++){
        if(i === line.length - 1){
          msg += ` ${i+1}. ${line[i]}`;
        } else {
        msg += ` ${i+1}. ${line[i]},`;
      }
      }
      return msg;
  }
}
