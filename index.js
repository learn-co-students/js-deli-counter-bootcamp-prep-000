var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, name){
  katzDeli.push(name);{
    return "Welcome, " + katzDeli + "." + " You are number " + katzDeli.length + " in line.";
  }
  katzDeli = [...otherDeli, name]; {
    return "Welcome, " + katzDeli.slice(3) + "." + " You are number " + katzDeli.length + " in line.";
  }
}

function nowServing(deliLine){
  katzDeli = []; {
    return "There is nobody waiting to be served!"
  }
  deliLine.shift(name); {
    return "Currently serving " + katzDeliLine.slice(0);
  }
}

/*function currentLine(katzDeliLine){
  if (katzDeliLine){
    return "The line is currently "
  } else {
    return "The line is currently empty."
  }
}*/
