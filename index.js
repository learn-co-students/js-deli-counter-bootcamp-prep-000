


function takeANumber(line,name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}


function nowServing(deliLine){
  if (deliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }
  else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}  

function currentLine(line){
  if (line.length === 0){
    var lineDeli = `The line is currently empty.`;
  }
  
  else {
    lineDeli = `The line is currently:`;
    for (let i = 0; i < line.length; i++){
      lineDeli += ` ${i+1}. ${line[i]}`;
      if(i !== line.length-1){
        lineDeli += `,`;
      }
    }
  }
  return lineDeli;
}
