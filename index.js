function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line.length){
    var now = line.shift();
  } else {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${now}.`;
}

function currentLine(line){
  if(!line.length){
    return 'The line is currently empty.'
  } else {
    var result = 'The line is currently: ';
    for(var i=0; i<line.length - 1; i++){
      result += `${i+1}. ${line[i]}, `;
    }
  }
  result += `${line.length}. ${line[line.length-1]}`
  return result;
}