function takeANumber(arr, name) {
  arr.push(name);
  for (var i = 0; i < arr.length; i++) {
    var indexNum = arr.indexOf(arr[i]) + 1;
    if (name.toUpperCase() === arr[i].toUpperCase()) {
      return "Welcome, " + arr[i] + ". You are number " + indexNum + " in line."
    }
  }
}

function nowServing(arr) {
  if (arr.length > 0) {
    var serving = "Currently serving " + arr[0] + ".";
    arr.shift();
    return serving;
  }else {
    return "There is nobody waiting to be served!"
  }
}

function nowServing(arr) {
  if (arr.length > 0) {
    var serving = "Currently serving " + arr[0] + ".";
    arr.shift();
    return serving;
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(arr) {
  var cc = [];
  var ss;
  if (arr.length > 0){
    for (var i = 0; i < arr.length; i++) {
      cc.push((i + 1) + ". " + arr[i]);
    }
    ss = cc.join(", ");
    return "The line is currently: " + ss;
  }else {
    return "The line is currently empty."
  }
}
