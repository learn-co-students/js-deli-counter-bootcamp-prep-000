function takeANumber(line,name)
{
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line)
{
  if(line.length==0)
  {
    return('There is nobody waiting to be served!');
  }
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line)
{
  if(line.length==0) {
    return 'The line is currently empty.';
  } else {
    var result='The line is currently:';
    var x;
    for(x=1;x<=line.length;x++) {
      var name=line[x-1];
      result+= ` ${x}. ${name},`;
    }  
    return result.substr(0,result.length-1);
  }
}