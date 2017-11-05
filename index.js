function takeANumber(crentLine, name)
{
  crentLine.push(name);
  return `Welcome, ${name}. You are number ${crentLine.length} in line.`;
}

function nowServing(crentLine)
{
  if(crentLine.length === 0) return "There is nobody waiting to be served!";
  return `Currently serving ${crentLine.shift()}.`;
}

function currentLine(crentLine)
{
  if (crentLine.length === 0) {
    return "The line is currently empty.";
  }
  let string ="The line is currently: "
  for (var i = 0; i < crentLine.length; i++) {
    if(i === crentLine.length-1) string += `${i+1}. ${crentLine[i]}`;
    else string += `${i+1}. ${crentLine[i]}, `;
  }
  return string;
}
