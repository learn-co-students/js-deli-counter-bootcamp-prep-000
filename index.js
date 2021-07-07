var line = [];
 var listLine=[];
function takeANumber(line, name){
  line.push(name);
  
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

	function nowServing(line) {
  while (true) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${line.shift()}.`);
}
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }

  for (var i=0; i<line.length ;i+=1){
    listLine.push(i+1+'. '+ line[i])
  }
return ('The line is currently: '+ (listLine.join(', ')))
}

