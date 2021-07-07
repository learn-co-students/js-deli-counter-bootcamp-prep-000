var katzDeliLine = []; 


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var place = (katzDeliLine.length);
  console.log('Welcome, ' + name + '. You are number ' + place + ' in line.');
  return 'Welcome, ' + name + '. You are number ' + place + ' in line.';
}



function nowServing(katzDeliLine) {  
  if (katzDeliLine.length>=1) { //if there is at least one person in line 
    let name = katzDeliLine[0] //can't change array after return 
    katzDeliLine.shift(); //takes first name off 
    return 'Currently serving ' + name + '.';

  } else {  
    console.log('There is nobody waiting to be served!');
    return 'There is nobody waiting to be served!'
  }
}


 function currentLine(line){
  if(line.length===0) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}
    
 
     
     
 

 /*
 
  if (katzDeliLine.length>0){
    let i = 0; 
  var person = katzDeliLine[i];
  return "The line is currently: " + (i+1) + ". " + person + ", "; 
  } 
  else {
    return "The line is currently empty."
  }
    
  }


function currentLine(){
  let i = 0 
  while (katzDeliLine.length > 0){
    var nameOrder = [];
    nameOrder.push((i+1) + '. ' + katzDeliLine[1] + ',');
    i++
    return "The line is currenlty: " + (i+1) + ". " + nameOrder[i]; + ","
  }  
     return "The line is currently empty."
    
  }
  
  if (katzDeliLine.length>0){
    let i = 0; 
  var person = katzDeliLine[i];
  return "The line is currently: " + (i+1) + ". " + person + ", "; 
  } else {
    return "The line is currently empty."
  }
    
  }
  
  
  
let i = 0;
do {
  i += 1;
  console.log(i);
} while (katzDeliLine.length > 0);
  return "The line is currently empty."
  
  
let i = 0;
while (katzDeliLine.length>0) {
  n++;
  x += n;
}
 return "The line is currently empty."; 
 */