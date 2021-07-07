var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
  
}

function currentLine(line){
  var theString = 'The line is currently: ';
  if(line.length === 0){
    return "The line is currently empty.";
  }
  else{
    for(var i=0; i<line.length; i++){
      if(i===line.length-1){
        theString += `${i+1}. ${line[i]}`
      }
      else {
        theString += `${i+1}. ${line[i]}, `
      }
    }
    return theString;
  }
}




















// var katzDeli = [];

// function takeANumber(katzDeliLine, name){
//   katzDeliLine.push(name);
//   var position = katzDeliLine.length;
//   return `Welcome, ${name}. You are number ${position} in line.`
// }

// function nowServing(line){
//   if(line.length===0){
//     return "There is nobody waiting to be served!"
//   }
//   var removed = line.shift();
//   return `Currently serving ${removed}.`
// }

// function currentLine(line){
//   var answer = 'The line is currently: ';
//   if(line.length===0){
//     return "The line is currently empty."
//   }
//   for(var i=0; i<line.length; i++){
//     answer += `${i+1}. ${line[i]}`;
//     if(i < line.length - 1){
//       answer += ', '
//     }
//   }
//   return answer;
// }