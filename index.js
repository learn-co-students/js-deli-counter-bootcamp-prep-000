var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){
  let i = 0;
  while (i < katzDeli.length ){
    i++;
  }
  if (i === 0){
    return ("There is nobody waiting to be served!");
  }else{
   return (`Currently serving ${katzDeli.shift()}.`);  
  }
}

function currentLine(katzDeli){
  var current = [];
  var i = 0;
  while (i <katzDeli.length){
    current.push(' ' + [i+1]+`. `  + katzDeli[i]);
    i++;
  }
  if (i === 0){
    return("The line is currently empty.");
  } else{
    return(`The line is currently:${current}`);
  }
}