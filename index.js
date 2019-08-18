function takeANumber(katzDeli, name){
  katzDeli.push(name);
  
  
 
 return `Welcome, ${name}. You are number ` + katzDeli.length + ` in line.`;
 
 
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
     return 'There is nobody waiting to be served!';
  } else {
     return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


function currentLine(line){
  var string = "";
  for(var i = 0; i < line.length; i++){
    string += (i + 1) + '. ' + line[i] + ', ';
  }
  var string2 = string.slice(0, -2);
  
  if(line.length === 0){
    return "The line is currently empty.";
  } else {
    return "The line is currently: " + `${string2}`;
  }
}