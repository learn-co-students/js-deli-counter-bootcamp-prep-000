//deli counter
function takeANumber(arr, name){
  arr.push(name);
  let pos = arr.length;
  let str = `Welcome, ${name}. You are number ${pos} in line.`;
  return str;
}

function nowServing(arr){
  if(arr.length === 0){
    return "There is nobody waiting to be served!";
  }
  let name = arr.splice(0,1);
  return `Currently serving ${name}.`
}

function currentLine(arr){
  if(arr.length === 0){
    return "The line is currently empty.";
  }
  let str = "The line is currently: ";
  for(let i =0; i <arr. length; i++){
      if(i === arr.length-1){
        str += `${i+1}. ${arr[i]}`;
      }else{
        str += `${i+1}. ${arr[i]}, `;}
      }
      return str;
}
