var katzDeli = []
function takeANumber(katzDeli,newName) {
  katzDeli.push(`${newName}`)
  return (`Welcome, ${newName}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli,name) {
  var i=(katzDeli.length)
  if(i>0) {
  return `Currently serving ${katzDeli.shift()}.`
}
else  {
return "There is nobody waiting to be served!"}
}
;
var line = []
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
