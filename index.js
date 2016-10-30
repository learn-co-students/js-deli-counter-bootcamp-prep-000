var katzDeli = [];
function takeANumber(arr, name){
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(arr){
  return (arr[0]) ? `Currently serving ${arr.shift()}.` : `There is nobody waiting to be served!` ;
}

function currentLine(arr){
  if(!arr.length){
    return `The line is currently empty.`;
  }
  var message = `The line is currently:`;
  for(var i = 0; i < arr.length; i++){
    message = message + (` ${i+1}. ${arr[i]},`);
  }
  return message.slice(0,-1);
}
