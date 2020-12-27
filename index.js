var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
function nowServing(katzDeliLine){
 let i = 0;
  while(i < katzDeliLine.length){
    i++
  }
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

  var line = [];
function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var output = "";
    for(var i = 0; i < katzDeliLine.length; i++) {
        output += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return "The line is currently empty.";
  }
}