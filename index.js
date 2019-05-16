function takeANumber (katzDeliLine, name){
 var position = katzDeliLine.length+1
 katzDeliLine.push(name)
 return "Welcome, " + name +". You are number "+ position +" in line."

}

function nowServing(katzDeli) {
  let i=0
  while (i<katzDeli.length){
    i++
  }
  if (katzDeli.length == 0 ) {
    return "There is nobody waiting to be served!"
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

var line= []
function currentLine (katzdeli){
  let i=0
  while (i < katzdeli.length){
 line.push(` `+[i+1]+`. `  + katzdeli[i])
  i++;
}
if (katzdeli.length ==0 ) {
  return "The line is currently empty.";
} else
return ('The line is currently:' + line )

}
