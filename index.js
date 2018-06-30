var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line){
  if (line.length > 0){
    return 'Currently serving ' + line.shift() + '.';
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var temp = "";
  if (line.length === 0){
    return "The line is currently empty.";
} else {
for (let i = 0; i < line.length; i++){
  if (i === line.length-1) {
  temp += `${i+1}. ${line[i]}`; // This is gonna sound silly but the comma was giving me a hard time
  } else {
  temp += `${i+1}. ${line[i]}, `; 
      }
    }
  }
  return `The line is currently: ${temp}`;
}

