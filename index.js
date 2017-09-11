
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(line){
  if (line.length === 0){
    return 'There is nobody waiting to be served!';
  }else{
    var first = line[0];
    line.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }else{
    var array = [];
    for(var i= 1; line.length +1 > i; i++){
      array.push(' ' + i + '. ' + line[i-1]);
    }
    return 'The line is currently:' + array;
  }
}
