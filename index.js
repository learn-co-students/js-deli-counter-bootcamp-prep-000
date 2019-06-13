
function takeANumber(arr, name) {
  if(arr.length===0) {
    arr.unshift(name);
    return "Welcome, " + name +". You are number " + arr.length + " in line.";
  }
  else if(arr.length>0) {
    arr.push(name);
    return "Welcome, " + name +". You are number " + arr.length + " in line.";
  }
}

function nowServing(arr) {
  if(arr.length===0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " +arr.shift() + ".";
  }
}

function currentLine(arr) {
  var i=0;
  if(arr.length===0) {
    return "The line is currently empty.";
  }
  else {
      return "The line is currently: 1. " + arr[i] + ", " + "2. " +arr[i+1] + "," + " 3. " + arr[i+2]; 
    }
}