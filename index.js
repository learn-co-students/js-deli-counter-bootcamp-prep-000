//we need let customers take a number when they enter our store! Woo! So let's build a great function for them below!

// var katzDeliLine = []; 

function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(`${newPerson}`);
  
  return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`)
  }
  else {
    return ('There is nobody waiting to be served!')
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`); }
  else { 
    return("The line is currently empty.");
  }
}