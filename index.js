let takeANumber = function(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

let nowServing = function(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!" 
  } else { 
    return `Currently serving ${line.shift()}.`;
  }
}

let currentLine = function(line){
  let str = `The line is currently: `
  if(line.length === 0){
    return "The line is currently empty.";
  } else {
    for(let i=0;i<line.length;i++){
      str += i + 1 + '. ' + line[i] + ', ';
    }
    return str.slice(0, str.length - 2);
  }
}