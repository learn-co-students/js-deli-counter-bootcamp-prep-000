function takeANumber(position, name){
  position.push(`${name}`);
  return (`Welcome, ${name}. You are number ${position.length} in line.`);
}
/* 
this one works too

function nowServing(position){
  if(position.length === 0){
    return "There is nobody waiting to be served!";
  }
    else {
      return (`Currently serving ${position.shift()}.`);
      }
  }
  */
 function nowServing(position){
  if(position.length > 0){
    return (`Currently serving ${position.shift()}.`);
  }
    else {
      return "There is nobody waiting to be served!";
      }
  }
  
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
      var array = [];
      for (let i = 0; i < line.length; i++){
      array.push(" " + (i+1) + ". " + line[i] + "");
    }
  }
  return "The line is currently:" + array;
}