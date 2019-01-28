function takeANumber(line, name){
 let n= line.length+1;
 line.push(name);
    return `Welcome, ${name}. You are number ${n} in line.`;
}
function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${line.shift()}.`;
  }
}
function currentLine(line){
  let names= [];
  if (line.length>0){
    for(let i=0; i<line.length;i++){
      names.push(`${i + 1 }. ${line[i]}`);
    }
    return `The line is currently: ${names.join(', ')}`}
 else{
      return "The line is currently empty.";
    }
  }
