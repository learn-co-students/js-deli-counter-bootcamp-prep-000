var deliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine){
  if(deliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var name = deliLine[0];
    deliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(arr){
  if(arr.length === 0){
    return "The line is currently empty."
  }
  else{
    var line = "The line is currently:";
    for(let i = 0; i < arr.length; i++){
      if(i === arr.length -1){
        line += ` ${i + 1}. ${arr[i]}`;
      }
      else{
       line += ` ${i + 1}. ${arr[i]},`;
      }
    }
  }
  return line;
}
