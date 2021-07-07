var katzDeli = [];

function takeANumber(katzDeli,newbie){
  katzDeli.push(`${newbie}`);
  return(`Welcome, ${newbie}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){

  if (katzDeli.length > 0) {
//    return(`There is nobody waiting to be served!`)
    return (`Currently serving ${katzDeli.shift()}.`);
    katzDeli.shift();
  } else
//    return (`Currently serving ${katzDeli.shift()}.`);
//    katzDeli.shift();
    return(`There is nobody waiting to be served!`)
}

function currentLine(katzDeli){
var lineup = [];
  for (let i=0; i<katzDeli.length; i++) {
    lineup.push(` ` + [i+1]+ `. ` + katzDeli[i])
  }
//must be space in front or the commas won't line u right
  if (katzDeli.length > 0)  {
    return (`The line is currently:` + lineup);
  }
  else return (`The line is currently empty.`);
}
