function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var i = katzDeli.indexOf(name) + 1;
  var senten = "Welcome, "+name+". You are number "+i+" in line.";

  return senten;
}
