// var katzDeli = [];

function takeANumber(arr, s) {
  arr.push(s);
  return `Welcome, ${s}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
  var s = "There is nobody waiting to be served!";
  var s2 = "";
  if(arr.length > 0) {
    s2 = arr[0];
    arr.shift();
    return `Currently serving ${s2}.`;
  }
  else{
    return s;
  }
}

function currentLine(arr) {
  var s = "The line is currently empty.";
  var s2 = "The line is currently: ";
   if(arr.length > 0) {
     for(var i = 0; i < arr.length; i++) {
       if(i < arr.length - 1) {
         s2 += (i+1) + ". " + arr[i] + ", ";
       }
       else {
         s2 += (i +1) + ". " + arr[i];
       }
     }
    return s2
   }
  else{
    return s;
  }
}