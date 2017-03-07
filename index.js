var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  katzDeli = line;
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
};

function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + array.shift() + ".";
  }
};

function currentLine(line){

  if (line.length === 0){
    return "The line is currently empty.";
  }
  else{
    var result = 'The line is currently: ';
    for (var i = 0; i < katzDeli.length; i ++){
      result += (i+1) + '. ' + line[i];
      if (i !== (katzDeli.length-1))
        result += ", ";
    }
  }
return result;

};
