var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
 for (let i = 0; i <= katzDeli.length; i++){
   if (name === katzDeli[i])
    return `Welcome, ${katzDeli[i]}. You are number ${i + 1} in line.`;
  }
}

function nowServing(katzDeli){
    if (katzDeli.length === 0){
      return "There is nobody waiting to be served!";
    }
    else{
      return `Currently serving ${katzDeli.shift()}.`;
    }
}

function currentLine(line){
  var array = [];
    if (line.length === 0){
      return "The line is currently empty.";
    }
    else{
      for (let i = 0; i < line.length; i++){
        array.push(`${i + 1}. ${line[i]}`);
      }
      return `The line is currently: ${array.join(", ")}`;
  }
}
