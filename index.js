var nameArr = [];


function takeANumber(nameArr, name){
 nameArr.push(`${name}`);
 return(`Welcome, ${name}. You are number ${nameArr.length} in line.`);
}


function nowServing(nameArr){
   
  if(nameArr.length === 0){
    return "There is nobody waiting to be served!";
  }
  
  else
  return (`Currently serving ${nameArr.shift()}.`);
  
  
}

var line = [];
function currentLine(nameArr) {
  let i = 0;
  while (i < nameArr.length) {
    line.push(` `+[i+1]+`. `  + nameArr[i])
    i++;
  }
  if (nameArr.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
