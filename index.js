let katzDeliLine = [];

function takeANumber(array, name){
    array.push(name);
    return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array){
  if (array.length === 0){
    return `There is nobody waiting to be served!`;
  } else {
    let served = array[0];
    array.splice(0,1);
    return `Currently serving ${served}.`;
  }
}

function currentLine(line){
  let str = `The line is currently: `;
    console.log(line.length);
    
    if (line.length === 0){
      str = "The line is currently empty.";
      return str;
}
  for (let index = 0; index < line.length; index++){
     if (index == line.length-1) {
      str += `${index+1}. ${line[index]}`;
    } else {
      str += `${index+1}. ${line[index]}, `;
  }
  
  }return str;   
}
