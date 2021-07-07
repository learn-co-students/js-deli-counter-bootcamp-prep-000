var takeANumber = function(n, name) {
  n.push(name);
  return "Welcome, " + name + ". You are number " + (n.length) + " in line.";
}

function nowServing(arr) {
  if(arr.length > 0) {
    var result = "Currently serving " + arr[0] + ".";
    arr.shift();
    return result;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr) {
  var result = "The line is currently: ";
  if(arr.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < arr.length; i++) {
      if(i < arr.length-1) {
        result += (i+1) + ". " + arr[i] + ", ";
      }else{
        result += (i+1) + ". " + arr[i];
      }
    }
    return result;
  }
}
