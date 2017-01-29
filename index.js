var katzDeli = [];

function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name);
   var index = katzDeliLine.indexOf(name) + 1;
   return `Welcome, ${name}. You are number ${index} in line.`;
}

function nowServing(katzDeliLine) {

    if (katzDeliLine.length != 0) {
     return `Currently serving ${katzDeliLine.shift()}.`;
   } else if (katzDeliLine == 0) {
      return "There is nobody waiting to be served!";
     }
}

function currentLine (line) {
 var list = []; for (var i = 0; i < line.length; i++) {
 list.push(` ${i + 1}. ${line[i]}`) };
 if (line != 0) {
   return `The line is currently:${list}`;
     } else {
        return 'The line is currently empty.';
      }
}
