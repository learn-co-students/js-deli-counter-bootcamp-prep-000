var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length <= 0){
    return "The line is currently empty."
  } else{
    var a = "The line is currently: ";
    for(let i = 0; i < line.length; i++){
      if (i + 1 == line.length){
        a += `${i + 1}. ${line[i]}`;
      } else {
        a += `${i + 1}. ${line[i]}, `;
      }
    }
    return a;
  }
}