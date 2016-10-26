function takeANumber(line, customer){
  line.push(customer);
  var position = line.length;
  return `Welcome, ${customer}. You are number ${position} in line.`
}

function nowServing(line){
  var first = line.shift();
  return line.length > 0 ? `Currently serving ${first}.` : "There is nobody waiting to be served!"
}

function currentLine(line){
  var statement = "The line is currently: "
  for(var i=0; i<line.length; i++){
    i !== line.length-1 ? statement += `${i+1}. ${line[i]}, ` : statement += `${i+1}. ${line[i]}`;
  }
  return line.length > 0 ? statement : 'The line is currently empty.'
}
