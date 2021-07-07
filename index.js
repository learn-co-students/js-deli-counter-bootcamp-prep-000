function takeANumber(current, name) {
 current.push(name);
 var pos = current.length;
 return `Welcome, ${name}. You are number ${pos} in line.`;
}

function nowServing(current) {
   if (current.length !== 0) {
     var newLine =`Currently serving ${current[0]}.`;
     current.shift()
    return newLine;
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(current) {
   var katzLine = []
     if (current.length !== 0) {
       for( var i = 0; i < current.length ; i++) {
       var name = current[i] ;
       var pos = i + 1
       katzLine.push(` ${pos}. ${name}`)
    }   
       return "The line is currently:" + katzLine;
  
    } else { 
      return "The line is currently empty.";
  } 
}