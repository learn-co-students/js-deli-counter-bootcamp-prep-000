var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  return line.length > 0? `Currently serving ${line.shift()}.` : 'There is nobody waiting to be served!';
}

function currentLine(line){
  if ( line.length < 1 ){
    return 'The line is currently empty.';
  }
  var message = 'The line is currently: ';
  for (let i = 0, j = 1; i < line.length; i++ ){
    if ( i > 0 ){
      message += ', ';
    }
    message += `${j}. ${line[i]}`;
    j++;
  }
  return message;
}
