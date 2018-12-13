
var katzDeli = []; 
  
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
  let i = 0
  while (i < katzDeliLine.length){
    i += 1
  }
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else
    return (`Currently serving ${katzDeliLine.shift()}.`)
}

var line = []
// function currentLine(katz){
//   let i = 0
//   while (i < katz.length){
//     line.push(` ` + [i + 1] + `. ` + katz[i])
//     i += 1
//   }
//   if (katz.length === 0){
//     return "The line is currently empty."
//   }else 
//     return (`The line is currently:` + line)
// }

function currentLine(katzDeli) {

for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
if (katzDeli.length === 0){
    return "The line is currently empty."
  }else 
    return (`The line is currently:` + line)
}
