function takeANumber(line,name){
  if(line.indexOf(name) === -1){
    line.push(name);
  }
  for (var i = 0; i < line.length; i++){
    if(line[i] == name){
      return 'Welcome, ' + name + '. You are number ' + (i+1) +' in line.'
    }
  }
}
function nowServing(array){
  while(array[0]){
    var name = array.shift();
    return "Currently serving " + name+".";
  }
  return "There is nobody waiting to be served!";
}
function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }
  var str = 'The line is currently: 1. ' + line[0];
  for(var i = 1;i < line.length;i++){
    str += ", " + (i+1) + ". " + line[i];
  }
  return str;
}
