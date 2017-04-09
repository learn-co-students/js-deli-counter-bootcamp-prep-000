var katzDeliLine=[];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  return (line.length>0)?`Currently serving ${line.shift()}.`:"There is nobody waiting to be served!";
}

function currentLine(line) {
  var string='The line is currently: ';
  if(line.length===0)
    return 'The line is currently empty.';
  for(let i=0;i<line.length;i++) {
    string+=`${i+1}. ${line[i]}${(i===line.length-1)?'':', '}`;
  }
  return string;
}

