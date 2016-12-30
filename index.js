var katzDeli = [];
function takeANumber(katzDeli, name) {
   katzDeli.push(`${name}`);
 return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
 }
 function nowServing(katzDeli){
      if (katzDeli.length == 0){
     return ("There is nobody waiting to be served!")
    }
    else { var k = katzDeli.shift();

    return `Currently serving ${k}.` ;
    }
  }

  function currentLine(katzDeli){
  if (katzDeli.length !== 0){
    var currLine = "The line is currently: ";
    for (let i = 0; i < katzDeli.length; i++){
      if (i > 0) currLine += ", ";
      currLine += `${i+1}. ${katzDeli[i]}`;
    }
    return currLine;
  }
  return "The line is currently empty.";
}
