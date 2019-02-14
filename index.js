var katzDeliLine = [];

function takeANumber (current_line, new_customer_name) {
  current_line.push(new_customer_name);
  return `Welcome, ${new_customer_name}. You are number ${current_line.length} in line.`;
}

function nowServing(front_of_the_line) {
  if (front_of_the_line.length===0)
  return 'There is nobody waiting to be served!';
  else 
  return `Currently serving ${front_of_the_line.shift()}.`;
 }
 
function currentLine(current_line) {
  if (current_line.length===0) {
  return 'The line is currently empty.';
  }
  
  else {
  const positions = [];
  for (let i=0, l=current_line.length; i<l; i++){
    positions.push(`${i + 1}. ${current_line[i]}`);
  }
  return `The line is currently: ${positions.join(', ')}`;
}
}