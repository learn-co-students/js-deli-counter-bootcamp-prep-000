function takeANumber(line,name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!";
  }
  else{
    return`Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty.";
  }
  else{
    var s=`The line is currently: 1. ${line[0]}`;
    if (line.length>1){
      for(let i=1;i<line.length;i++){
        s = s.concat(`, ${i+1}. ${line[i]}`)
      }
    }
  }
  return s;
}
