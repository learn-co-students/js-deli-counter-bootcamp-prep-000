function takeANumber(line, name){
  let pos = line.length;
  line.push(name);
  return `Welcome, ${name}. You are number ${1 + pos} in line.`;
}

function nowServing(line){
  let len = line.length;
  if (len === 0 ){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  let len = line.length;
  if (len !== 0){
    let acc = "The line is currently: "
    
    for (let i = 0; i < len; i++){
      acc = `${acc}${i+1}. ${line[i]}`;
      if(i !== len-1){acc = `${acc}, `}
    }
    return acc;
    
  } else {
    return "The line is currently empty.";
  }
}