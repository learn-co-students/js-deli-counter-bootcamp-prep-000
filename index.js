function takeANumber(arr,name){
 arr.push(name);
 var spot = arr.indexOf(name) + 1;
 return `Welcome, ${name}. You are number ${spot} in line.`;
}

function nowServing(arr){
  if(arr[0]){
    var next = arr[0];
  }else{
    return "There is nobody waiting to be served!";
  }
  arr.shift();
  return `Currently serving ${next}.`
}

function currentLine(arr){
  var reply = "The line is currently:";
  if(arr.length > 0){
    for(var i = 0; i < arr.length; i++){
      reply += ` ${i + 1}. ${arr[i]}${arr.length === i + 1 ? "" : ","}`
    }
    return reply;
  }else{
    return "The line is currently empty."
  }
}
