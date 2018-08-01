
//taking empty array = katzDeliLine and stringified 'name'
function takeANumber(katzDeliLine, name){ 
  
  //appends and stringifies 'name' variable 
  //with corresponding katzDeliLine array
   katzDeliLine.push(`${name}`);
   
   //returns a string w name and the length of the inputted array;
   return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
    let i=0;
    while (i<katzDeliLine.length){
      i++;
    }if (i===0){
    return "There is nobody waiting to be served!";
    } else {
      return (`Currently serving ${katzDeliLine.shift()}.`);
    }
}

var line = [];
function currentLine(katzDeliLine){
  let i=0;
  while (i<katzDeliLine.length){
    line.push(' '+[i+1]+`. `  + katzDeliLine[i]);
    i++;
  }
    if (katzDeliLine.length === 0){
    return "The line is currently empty.";
   } else {
    return ("The line is currently:"+line);
   }
}
//3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."