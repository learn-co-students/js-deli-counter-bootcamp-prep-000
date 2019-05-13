var katzDeliline = [];

function takeANumber(katzDeliLine,name){

// Quando vc insere, ele retorna a posição em que inseriu

var new_position = katzDeliLine.push(name);

// maneira mais curta de concatenar string

return `Welcome, ${name}. You are number ${new_position} in line.`

}

function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}