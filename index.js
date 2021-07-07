//var katzDeli = [];
function takeANumber(katzDeliLine, name){
  var katzDeli = [];
  for(let i = 0; i < katzDeliLine.length; i++){
    katzDeli.push(katzDeliLine[i]);
  }
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`

}


function nowServing(katzDeli){
  if (katzDeli.length === 0) return `There is nobody waiting to be served!`
  else return `Currently serving ${katzDeli.shift()}.`;
}

function currentLine(line){
  let list = [];

    if (line.length  === 0) return `The line is currently empty.`
    else for(let i = 0; i< line.length; i++)
      list.push(` ${i+1}. ${line[i]}`);

    return `The line is currently:` + list;
  }
