function takeANumber(currentPeople,newPerson)
{
  currentPeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentPeople.length} in line.`;
}

function nowServing(currentPeople)
{
  
  if (currentPeople.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var customer = currentPeople[0];
    currentPeople.shift();
    return `Currently serving ${customer}.`;
  }
  
}
function currentLine(currentLine)
{
  
  if (currentLine.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    
    return `The line is currently: 1. ${currentLine[0]}, 2. ${currentLine[1]}, 3. ${currentLine[2]}`;
  }
}