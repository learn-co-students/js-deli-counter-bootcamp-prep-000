var katzDeli = [];

function takeANumber(katzDeli,name){
  var numba = katzDeli.length + 1;
  katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + numba + ' in line.';
  // katzDeli.concat(name);
}

function nowServing(katzDeli){
  if (katzDeli.length > 0) {
    var servin = katzDeli[0];
    katzDeli.shift();
    return "Currently serving " + servin + ".";

  } else {
    return "There is nobody waiting to be served!";
  }
  // katzDeli.splice(0,1);
  // return katzDeli;
}

function currentLine(katzDeli){
  if (katzDeli.length > 0) {
    var arr = ':';
    for (var i=0; i<katzDeli.length; i++) {
      var numb = i + 1;
      var arr2 = ' ' + numb + '. ' + katzDeli[i] + ',';
      arr = arr + arr2;
    }
    arr = arr.slice(0, -1);
    return 'The line is currently' + arr;
  } else {
    return 'The line is currently empty.';
  }
}
