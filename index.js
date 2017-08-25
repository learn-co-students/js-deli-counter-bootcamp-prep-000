var katzDeli = [];
function takeANumber(array, person){
  array.push(person);
  return "Welcome, " + person + ". You are number " + (array.length)+ " in line.";
}
function nowServing(array){
  var name;
  if(array.length === 0){
    return  "There is nobody waiting to be served!";
  }else{
    name =array.shift();
    return "Currently serving " + name +".";
  }
}
  function currentLine(array){
  var line = "The line is currently: ";
    if(array.length === 0){
      return "The line is currently empty.";
    }else{
      for (var i=0; i<array.length; i++){
        if(i === array.length-1){
      line += [i+1] + ". " + array[i];
    }else{
      line += [i+1] + ". " + array[i]  + ", ";
    }
    }
    return line;
    }
  }
