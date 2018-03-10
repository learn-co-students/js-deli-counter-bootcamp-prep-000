var katzLine = []; 
//The day start out as no one in the line, so the array is empty.

// Taking a number & waiting in the line
function takeANumber (katzLine, name) {
  katzLine.push(name);
  return`Welcome, ${name}. You are number ${katzLine.length} in line.`
}


//Time to Serve the person of the number
//Using ${katzLine.shift() works because the output is going to be that deleted person.
function nowServing(katzLine) {
  if (0 < katzLine.length) {
    return `Currently serving ${katzLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}


//the symbol |variable += string/number'| adds whatever after to the variable  
function currentLine(katzLine) {
  if (katzLine.length === 0) {
    return "The line is currently empty.";
    
  } else {
      var message = `The line is currently: 1. ${katzLine[0]}`;
    
      for (var i = 1; i < katzLine.length; i++) {
      message += `, ${i+1}. ${katzLine[i]}`;
    
      }
       return message;
  }
}