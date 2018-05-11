var katzDeli =[];

function takeANumber(line, name){
  line.push(name);
  let linePos = line.length;
  
  return `Welcome, ${name}. You are number ${linePos} in line.`
}
function nowServing(line){
  if(line.length > 0){
   let serve = line.shift();
   
   return `Currently serving ${serve}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line){
  
  let lineString = "The line is currently: "
  
  if(line.length > 0){
    
    for( let i = 0; i < line.length; i++){
      let linePos = i + 1;
      if(i !== line.length - 1) {
        lineString += `${linePos}. ${line[i]}, `
      }
      else{
        lineString += `${linePos}. ${line[i]}`
      }
    }
   return lineString; 
  }
  else{
    return "The line is currently empty."
  }
}