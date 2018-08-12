function takeANumber(lineArr, name){
  lineArr.push(name);
  return "Welcome, " + name +'.'+ ' You are number ' + lineArr.length + ' in line.';
}

function nowServing(lineArr){
  
  var first;
  if(lineArr.length>0)
  {
    first = lineArr[0];
    lineArr.shift(0);
    return "Currently serving " + first + '.';
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if(line.length === 0)
  {
    return "The line is currently empty."
  }
  else{
    var i=0;
    var x;
    var str = "The line is currently: "
    do{
      if(i !=line.length -1){ x=', '} else{ x= ''}
      str = str + (i+1) +'. ' + line[i] + x;
      i++;
    }
    while(i < line.length);
   return str;
  }
}