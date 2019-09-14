function takeANumber(array,name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}
function nowServing(array){
  let i=0;
  if (i<array.length){
    return `Currently serving ${array.shift(array)}.`;
  }else{
    return `There is nobody waiting to be served!`;
  }
}
function currentLine(array){
  var numArray=[];
  if (array.length===0){
    return `The line is currently empty.`;
  }
  for (let i=0;i<array.length;i++){
    numArray.push(`${i+1}. ${array[i]}`);
  }
  return `The line is currently: ${numArray.join(', ')}`;
}
