function takeANumber(arr, name){
  arr.push(name);
  return "Welcome, " + name + ". You are number " + arr.length + " in line.";
}

function nowServing(arr){
  if (arr.length === 0){
    return "There is nobody waiting to be served!";
  }
  return "Currently serving "+ arr.shift() + ".";
}

function currentLine(arr){
  if (arr.length === 0){
    return "The line is currently empty."
  }
  
  var str = "The line is currently: ";
  for (var i = 0; i < arr.length; i++){
    str += (i+1 + ". " + arr[i]);
    if (i < arr.length - 1) {
      str += ", ";
    }
  }
  return str;
}