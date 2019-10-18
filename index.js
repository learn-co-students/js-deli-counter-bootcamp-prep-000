var katzDeli = [];

function isInLine(line, person){
  for(var i = 0; i<line.length; i++)
    if(line[i]==person) return i;
  return -1;
}

function takeANumber(line, person) {
  var pos = isInLine(line, person);
  if(pos != -1)
    return `Welcome, ${person}. You are number ${pos+1} in line.`;
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function currentLine(line) {
  var queue = "";
  if(line.length==0) queue=" empty.";
  else {
    queue+=":";
    for(var i=1; i<=line.length; i++){
      queue+=` ${i}. ` + `${line[i-1]}`;
      if(i!=line.length) queue+=",";
    }
  }
  return "The line is currently"+queue;
}

function nowServing(line) {
  var out = line.length>0?`Currently serving ${line[0]}.`:"There is nobody waiting to be served!";
  line.shift();
  return out;
}