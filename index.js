var katzDeliLine = [];

function takeANumber(x, name){
  x.push(`${name}`) 
  return "Welcome, " + `${name}` + "." + " You are number " + `${x.length}` + " in line."
}

function nowServing(x){
  if(x.length === 0) {
    return "There is nobody waiting to be served!"
  }else {
    return (`Currently serving ${x.shift()}.`);
  }
}

function currentLine(katzDeliLine){
  var str = `The line is currently: `;
  var newLine = [];
  if (katzDeliLine.length === 0) 
  return "The line is currently empty.";
  else{
    for (let i = 0; i < katzDeliLine.length; i++){
        newLine.push(`${[i+1]}. ${katzDeliLine[i]}`)
      }
   str += newLine.join(', ')
   return str;
  }
}