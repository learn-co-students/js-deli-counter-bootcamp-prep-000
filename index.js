//--------TAKE-A-NUMBER--------//
function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

takeANumber(katzDeli, name);

//--------NOW-SERVING---------//


function nowServing(deliLine){
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else
  return `Currently serving ${deliLine.shift()}.`;
}

nowServing(deliLine);

//-------CURRENT-LENGTH-------//


function currentLine(deliLine){
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    deliLine = deliLine.map((c, i) => `${i + 1}. ${c}`).join(', ');
    return `The line is currently: ${deliLine}`;
  }
}

currentLine(deliLine);