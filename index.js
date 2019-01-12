function takeANumber(line, name) {
  line.push(name);
  var place = line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  return `Currently serving ` + line.shift() + `.`;
  }
}
  
function currentLine(line){
  var waiting= []
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
      for (let i=0; i<line.length; i++){
      waiting.push(` ${i+1}. ${line[i]}`)
      }
  }
  return "The line is currently:" + waiting
}

// function currentLine(katzDeliLine){
//   var lineList = [];
//   if (katzDeliLine[0] === undefined) {
//     return 'The line is currently empty.';
//   }
//       for (var i = 0; i < katzDeliLine.length; i++) {
//       lineList.push(` ${i+1}. ${katzDeliLine[i]}`)
//       }
//       return "The line is currently:" + lineList;
//   }
      
       