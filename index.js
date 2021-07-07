var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var guy = katzDeliLine.length - 1 ? katzDeliLine.length : 1;
  return (`Welcome, ${name}. You are number ${guy} in line.`);
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
  let guy1 = deliLine.shift();
    return (`Currently serving ${guy1}.`);
  }
    return "There is nobody waiting to be served!";
  
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
  let cool = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++){
      cool += `${i + 1}. ${katzDeliLine[i]}${i !== katzDeliLine.length - 1 ? ", " : ""}`
    } return cool; 
    } return "The line is currently empty.";
}