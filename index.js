var katzDeliLine = [];

function takeANumber(line,name){
  line.push(name);
  for (var i=0;i<line.length;i++){
    if (line[i]===name) {
    var spot = i+1;
    return `Welcome, ${name}. You are number ${spot} in line.`;
    }
  }
}

function nowServing(line){
  while (line.length>0){
    var current = line[0];
    line.shift();
    return `Currently serving ${current}.`;
  }
  return 'There is nobody waiting to be served!'
}

function currentLine(line){
    if (line.length>0){
      for (i=1;i<=line.length;i++){
        lines = [...lines,`${i}. ${line[i-1]}`];
      }
    return `The line is currently:  ${lines}.`;
  }
  return 'The line is currently empty'
}
