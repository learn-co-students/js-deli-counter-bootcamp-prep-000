var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {

     if (katzDeli.length === 0 ) {
      return `There is nobody waiting to be served!`;
     }
     else {
       var serving = `Currently serving ${katzDeli[0]}.`
       katzDeli.shift()
       return serving
     }
  }

function currentLine(katzDeli){
  if (katzDeli.length === 0) {
    return `The line is currently empty.`
  }
  else { return `The line is currently: ${katzDeli.slice(0)}`;
  }
}
