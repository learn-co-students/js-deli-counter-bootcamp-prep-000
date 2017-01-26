var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(kartzDeli){
  let i = 0
  while (kartzDeli.length > i){
i++;
}
  if (kartzDeli.length===0){
    return "There is nobody waiting to be served!"
  }else{
    return (`Currently serving ${kartzDeli.shift()}.`)
  }
}