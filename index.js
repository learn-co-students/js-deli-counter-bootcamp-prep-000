var katzDeli = ["Steven", "Blake", "Avi"];


function takeANumber(katzDeli, name){
 katzDeli.push(name);
 return `Welcome, ${name}. You are number ` + (katzDeli.indexOf(name) + 1) + " in line."
};

function nowServing(katzDeli){
  if(katzDeli.length != 0){
    var removed = katzDeli.shift(0)
    return "Currently serving " + removed + "."
  } else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeli){
  if(katzDeli.length != 0){
    return "The line is currently: " + `1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}`
  } else{
    return "The line is currently empty."
  }
}
