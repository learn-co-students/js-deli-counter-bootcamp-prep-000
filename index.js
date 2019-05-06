var katzDeliLine = []; 
var lineNamesandNumbers = [`Steven`,`Ada`,`Grace`]; 

line[1]; 
line.length;  
currentline.length; 

function takeANumber (currentline, newperson) { 
  
  currentline.push (newperson); 
  var positioninline = (currentline.length); 
  return (`Welcome, ${newperson}. You are number ${positioninline} in line.`);}
  
  function nowServing (line) {
  if (!line.length) { return "There is nobody waiting to be served!" } 
    else {
  return "Currently serving"+ line.shift(); 
  }
  }
  
   
  for (var i = 0, i;line.length; i++){ 
    lineNamesandNumbers.push (i+1+","+line[i]); 
  } {
  return "The line is currently:" + lineNamesandNumbers.join (","); 
  } 
  
  
  

  