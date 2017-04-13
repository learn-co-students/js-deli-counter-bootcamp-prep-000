var katzDeli = [];

function takeANumber(line,newPerson){
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}

function nowServing(line){
var serv;
  if (line.length){
    serv = `Currently serving ${line.slice(0,1)}.`;
    line.shift();
    return serv;
}
  else { return "There is nobody waiting to be served!"}
}

function currentLine(line){
var curLine='';
var lineLen=line.length;
console.log(lineLen);
  if (line.length<1) {
    return "The line is currently empty."
  } else {
    for (let i=0;i<line.length;i++)
    {
      curLine=curLine+(i+1)+". "+line[i]+(i==line.length-1?'':", ");
      console.log(curLine);
    }
    return "The line is currently: "+curLine;
  }
}
