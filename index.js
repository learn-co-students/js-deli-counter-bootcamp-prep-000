var katzDeli = [];
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if (line.length < 1){
    return 'There is nobody waiting to be served!';
  }
  var customer_name = line.shift(0);
  return `Currently serving ${customer_name}.`;
  
}

function currentLine(line, name){
  
  if (line.length < 1){
    return 'The line is currently empty.';
  }
  
 var namesAndNumbers = []; 
  for (let i = 0 ; i < line.length; i++){
    namesAndNumbers.push(`${i + 1}. ${line[i]}`);
  } 
    return `The line is currently: ${namesAndNumbers.join(', ')}`;

}
