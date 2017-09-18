var katzDeli = [];

 function takeANumber(katzDeliLine, name){
   var line = katzDeliLine;
   line.push(name);
   var index = line.indexOf(name)
   index += 1;
   return `Welcome, ${name}. You are number ${index} in line.`;
     }

function nowServing(katzDeliLine) {
  var line = katzDeliLine
  if (line.length > 0) {
    var now = line.shift();
    return `Currently serving ${now}.`;
  } else if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
   var outcome = "The line is currently: "
   if (katzDeliLine.length === 0) {
     return "The line is currently empty."
   } else {
     for (var i = 0; i < katzDeliLine.length; i ++) {
       var lineNum = i + 1;
       if (i === (katzDeliLine.length - 1)) {
         var line2 = `${lineNum}. ${katzDeliLine[i]}`
         outcome = outcome.concat(line2)
       }
        else {var line = `${lineNum}. ${katzDeliLine[i]}, `
       outcome = outcome.concat(line)}
     }
   }
   return outcome;
 }
