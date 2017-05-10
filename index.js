var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli, name){
  if(katzDeli < 1){
    return "There is nobody waiting to be served!"
  }else{
    katzDeli.push(name);
    return `Currently serving ${name}.`
    katzDeli.shift(name);
  }
  return katzDeli
}

function currentLine(line){
  if (katzDeli < 1){
    return "The line is currently empty."
  }else{
    return `The line is currently ${katzDeli.length}. ${name}`
  }
  return katzDeli
}
