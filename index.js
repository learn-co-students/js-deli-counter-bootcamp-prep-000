function takeANumber(array,name){
array.push(name)
return(`Welcome, ${name}. You are number ${array.length} in line.`)
}

function nowServing(array){
  if(array.length === 0){
    return("There is nobody waiting to be served!")
  }
  else{
    return(`Currently serving ${array.shift()}.`) 
  }
}

var line = [];

function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}



