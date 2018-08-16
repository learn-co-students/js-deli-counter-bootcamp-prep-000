function takeANumber(KatzDeli,name){
  KatzDeli.push(name)
  return `Welcome, ${name}. You are number ${(KatzDeli.length)} in line.`
}
function nowServing(KatzDeli) {

  if( KatzDeli.length !== 0) { return `Currently serving ${KatzDeli.shift()}.`
  }
  else { return "There is nobody waiting to be served!"}
}
var line = [];
  function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}