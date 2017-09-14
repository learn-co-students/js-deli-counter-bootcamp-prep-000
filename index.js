var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  var client = line[0];
  if (client === undefined) {
    return 'There is nobody waiting to be served!'
  }
  else {
    line.shift();
    return `Currently serving ${client}.`
  }
}

function currentLine(line){
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else{
    var desc = 'The line is currently:';
    for (var i = 0; i < line.length; i++) {
      desc+= ` ${i+1}. ${line[i]}`
      if (i< line.length-1) {
        desc +=',';
      }
    }
    return desc;
  }
}
