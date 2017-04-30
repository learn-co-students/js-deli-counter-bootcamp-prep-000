function takeANumber(arr,name)
{
  arr.push(name);
  if(arr.length ===1){
    return `Welcome, ${name}. You are number 1 in line.`
  }
  else{
    return `Welcome, ${name}. You are number ${arr.length} in line.`
  }
  

}

function nowServing(arr)
{
  if(arr.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var temp = arr.shift();
    return `Currently serving ${temp}.`
  }
}


function currentLine(line)
{
  if(line.length ===0){
    return 'The line is currently empty.';
  }
  else{
    var msg = "The line is currently: ";
    for(var i =0; i< line.length; i++){
      if(i === 0){
          msg += `${i + 1}. ${line[i]}`;
      }
      else{
        msg += `, ${i + 1}. ${line[i]}`
      }
    
    }
    return msg;
  }
}