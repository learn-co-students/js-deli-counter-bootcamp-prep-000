var katzDeli = ['Blake', "Shawna", "Steven", 'Justine'];

function takeANumber(katzDeliLine, name) {
  
 katzDeliLine.push(name);
 var msg = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
 return msg;
  
}

function nowServing (katzDeliLine) {
  
  var msg;
  
  if (katzDeliLine.length === 0){
    
    msg = "There is nobody waiting to be served!";
    return msg;
    
  } else {
    
    msg = "Currently serving " + katzDeliLine[0] + '.';
    katzDeliLine.shift();
    return msg;
    
  }
  
}

function currentLine(line) {
  
  var msg = "The line is currently: ";
  if (line.length === 0) {
    
    return "The line is currently empty.";
    
  } else {
    
    for (let i = 0; i < line.length - 1; i++) {
      
      msg += `${i + 1}. ${line[i]}, `;
      
    }
  
    msg += `${line.length}. ${line[line.length - 1]}`;
  
  }
  
  return msg;
  
}

console.log( takeANumber(katzDeli,'Josh')  )
console.log( currentLine(katzDeli) ) ;
