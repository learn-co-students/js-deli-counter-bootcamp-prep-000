var katzDeli = [];
var justAChange = "To get the submit working";

var takeANumber = function(katzDeli, name){
  katzDeli.push(name);
  var pos = katzDeli.length;
  return 'Welcome, ' + name + '. You are number ' + pos + ' in line.';
}

var nowServing = function(katzDeli){
if (katzDeli.length > 0){
  var next = katzDeli.shift();
  return 'Currently serving ' + next + '.';
}else {
  return "There is nobody waiting to be served!";
}
}

var currentLine = function(katzDeli){
  var msg = 'The line is currently: '
  if (katzDeli.length !== 0){
    for (var i = 0; i < katzDeli.length; i++){
      var num = i + 1;
      msg += num +". " + katzDeli[i] + ", ";
  }
  } else {
    return "The line is currently empty.";
  }

  return msg.slice(0, -2);
}
