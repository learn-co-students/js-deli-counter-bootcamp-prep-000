
function takeANumber (katzDeli, name) {
  
  var correctNumber = katzDeli.length + 1;
  katzDeli.push(name);
  
  return (`Welcome, ${name}. You are number ${correctNumber} in line.`);
}

function nowServing(katzDeli) { 
  var customerName = katzDeli.shift();
 if (katzDeli.length === 0) {
   return("There is nobody waiting to be served!");
 } 
 
 else {
   return (`Currently serving ${customerName}.`);
 }
}

function currentLine (line) {
  
  var n = []
    for (let i=0; i<line.length ; i++) {
     n.push(` ${i+1}. ${line[i]}`)
    
  }
  var linePhrase = ("The line is currently:");
  

  if (line.length === 0) {
    return ("The line is currently empty.");
  }

  
  else {
    return (linePhrase + n);
  }
  
}


