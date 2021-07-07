
function takeANumber(line, person){
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    let person = line[0]
    line.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else{
    let str = `The line is currently: `
    for(let i = 0; i < line.length-1; i++){
      str += `${i+1}. ${line[i]}, `;
    }
    str+= `${line.length}. ${line[line.length-1]}`;
    return str;
  }
}