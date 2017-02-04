function takeANumber(arr, name){
  arr.push(name);
  return `Welcome, ${arr[arr.length-1]}. You are number ${arr.length} in line.`
}

function nowServing(arr){
  if(arr.length < 1){
    return "There is nobody waiting to be served!"
  }else{
    var serving = arr[0];
    arr.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line){
  var str = "The line is currently: "
  if (line.length > 0){
    for(var i = 0; i < line.length; i++){
      str = str.concat((i+1),". ", line[i],", ")
    }

    return str.slice(0, str.length - 2);
  }
  else{
    return "The line is currently empty."
  }
}
