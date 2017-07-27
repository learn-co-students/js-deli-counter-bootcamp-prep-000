function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${array[array.length-1]}. You are number ${array.length} in line.`
}

function nowServing(array){
  if (array.length <= 0){
    return "There is nobody waiting to be served!"
  }else{
     var now = array.shift();
     return `Currently serving ${now}.`;
  }
}

function currentLine(array){
  if (array.length <= 0){
    return "The line is currently empty.";
  }else{
    var newArr = [];
    for (var i = 0; i<array.length; i++){
      newArr.push(` ${i+1}. ${array[i]}`);
    }
    var newStr = newArr.toString();
    return `The line is currently: ${newStr}`;
  }
}
