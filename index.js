var katzDeliLine = [];
function takeANumber (katzDeliLine,name){
 katzDeliLine.push(name);
 return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  }
  
  function nowServing(katzDeliLine){
   if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
  }else{
   
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var katzDeliLine = [];
function currentLine(name){
  for (let i = 0; i < name.length; i++){
   katzDeliLine.push(` `+[i+1]+`. `  + name[i]) 
  }
  
  if (name.length === 0){
   return "The line is currently empty.";
  
  }else
 
  return (`The line is currently:${katzDeliLine}`);
  

}