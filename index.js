//katzDeliLine = []; -- empty array in test script
 takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
 }
 
function nowServing(katzDeliLine) {
   let deliLineIndex = 0;
   while (deliLineIndex<katzDeliLine.length){
     deliLineIndex++;
     return `Currently serving ${katzDeliLine.shift()}.`;
   }
   return "There is nobody waiting to be served!";
 }


 function currentLine(katzDeli) {
  let i = 0;
  var line= [];
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
//Build a function currentLine that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". You don't have to use katzDeliLine as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return "The line is currently empty."