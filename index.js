var katzDeliLine = [];
function takeANumber(line, name){
  line.push(name);
  // console.log(`Welcome, ${name}. You are number ${line.length} in line.`);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine){
  // var firstP = katzDeliLine.length - (katzDeliLine.length - 1);
  
  if (!katzDeliLine.length) {
    
    return 'There is nobody waiting to be served!';
    
  } else {
  
    return `Currently serving ${katzDeliLine.shift()}.` // print katzDeliLine[0] then remove it
  }
 
}

function currentLine(line){
  if(!line.length){
    return `The line is currently empty.`;
  } else {
    var numOfName = [];
    for(var i=0; i < line.length; i++){
      numOfName.push(`${i+1}. ${line[i]}`)
    }
    
    return `The line is currently: ${numOfName.join(', ')}`;
  }
}