function takeANumber(lineArray, name){
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`;
}

function nowServing(lineArray){
  return lineArray.length===0 ? 'There is nobody waiting to be served!' 
  : `Currently serving ${lineArray.shift(0)}.`;
}

function currentLine(lineArray){
  var lineString ="The line is currently:";
  var emptyString = "The line is currently empty."
  var nameNumberArray = lineArray.map((name, index) => {return `${(index+1)}. ${name}`})
  return lineArray.length === 0 ? emptyString : `${lineString} ${nameNumberArray.join(', ')}`;
}