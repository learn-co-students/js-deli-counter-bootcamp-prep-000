var katzDeliLine = [];

//building a Function
//function accept 2 parametrs (the current line of people and new persons name.)
//function returns welcome message

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
//building a function now serving
function nowServing(katzDeliLine){if (katzDeliLine.length > 0){return "Currently serving" + katzDeliLine.shift()+ ".";}
else { return "There is nobody waiting to be served!";}}


function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine(katzDeliLine){
  let line = ""
  
  if (katzDeliLine.length===0){
    return "The line is currently empty.";
    
  }else{
  for (let i =0; i < katzDeliLine.length; i++) {
  
line += `${i+1}. ${katzDeliLine[i]}, `;
     
  }
     line = line.slice(0, line.length - 2);
return (`The line is currently: ` + line);}
}




