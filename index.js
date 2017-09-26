var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return `There is nobody waiting to be served!`
  }else{
    var temp = katzDeli.shift();
    return `Currently serving ${temp}.`;
    }
}

function currentLine(line){
  var temp = ``;
  if(line.length === 0){
    return `The line is currently empty.`
  }else{for(var i = 0; i < line.length-1; i++){
      temp += `${i+1}. ${line[i]}, `
    };
  temp += `${i+1}. ${line[i]}`
  };
  return `The line is currently: ${temp}`
}
