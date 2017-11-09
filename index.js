var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
   var position =  katzDeliLine.length;
     katzDeliLine.push(name);  //I add new person to line
     if (position< 7){
     return `Welcome, ${name}. You are number ${position + 1} in line.`;
    }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  var served = katzDeliLine[0];
  katzDeliLine.shift();
  return  `Currently serving ${served}.`;
  } else {
     return 'There is nobody waiting to be served!';

  }
}


function currentLine(line){
    var text = 'The line is currently: ';
    if (line.length>0){
      //  text = (i+1) + '. ' + line[i] + ', ';
        for(var i = 0; i < line.length; i++){

           text = text + (i+1) + '. ' + line[i] + ', ';

        }

        return  text.slice(0,-2);
    } else {
       return `The line is currently empty.`;

    }
}
