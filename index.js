function takeANumber(currentNum, name){
  currentNum.push(name);
  return `Welcome, ${name}. You are number ${currentNum.length} in line.`;
}

function nowServing(currentNum){
  if (currentNum.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
     let i = 0;
     while (currentNum.length > 0){
       let now = currentNum[i];
       currentNum.shift();
       return `Currently serving ${now}.`;
     }
  }
}

function currentLine(currentNum){
  let str = 'The line is currently: ';
  if (currentNum.length === 0){
    return "The line is currently empty."
  }
  else{
    for (let i = 0; i < currentNum.length; i++){
      str += `${i + 1}. ${currentNum[i]}`;
      if (i + 1 !== currentNum.length){
        str += ', ';
      }
    }
  }
  return str;
}



