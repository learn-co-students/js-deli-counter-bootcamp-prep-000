var katzDeli = [];

var takeANumber = function(arr, name) {
  arr.push(name);
  var position = arr.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + position  + " in line." ;
}

var nowServing  = function(arr) {
  var customer = arr[0];
  var str = "Currently serving ";

  if(arr[0] === undefined) {
    str = "There is nobody waiting to be served!";
  }
  else {
    str =  str + customer + "."
  }
  arr.shift();
  return str;
}

var currentLine = function(arr) {
  var str = "The line is currently: ";

  for(var i = 0; i < arr.length; i++) {
    var place = i + 1;
    str += place + ". " + arr[i] + ", ";
  }

  if(arr.length === 0) {
    return str = 'The line is currently empty.' ;
  }

  return str.slice(0, [str.length - 2]);
}
