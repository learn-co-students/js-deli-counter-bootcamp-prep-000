function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
for (var i = 0; i< katzDeliLine.length; i++) {
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {return 'There is nobody waiting to be served!'}

  return `Currently serving ${katzDeliLine.shift()}.`;

}


function currentLine(deli){
  if(deli.length === 0) {return "The line is currently empty."}
  
  var line =[];
  
  for(var i = 0; i < deli.length; i++) {
   line.push(`${i+1}. ${deli[i]}`)
  }
  return `The line is currently: ${line.join(', ')}`
}