var katzDeliLine = [];

function takeANumber (katzDeliLine, name)
{
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}




function nowServing (katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {return "There is nobody waiting to be served!"}
  
  else
  {
  var name = katzDeliLine[0];
  katzDeliLine.splice(0, 1);
  return "Currently serving " + name + ".";
  }
  
}


function currentLine (x)
{
  var line = []
  
  if (x.length === 0)
  {return "The line is currently empty."}
  
  else
  {
    for (var i = 0; i < x.length; i++)
    {line += (i + 1) + ". " + x[i] + ", ";}
    line = line.slice(0, line.length-2)  
    return "The line is currently: "  + line
  }
  
}




//__________________________________________________________________________________________________
// Solution:

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};
