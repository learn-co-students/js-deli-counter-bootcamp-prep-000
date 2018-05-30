function takeANumber(katzDeliLine, name){
  var katzDeli = [];
  for(let i = 0; i < katzDeliLine.length-1; i++){
    katzDeli.push(katzDeliLine[i]);
  }
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`

}


function nowServing(katzDeli){
  if (katzDeli === []) return `There is nobody waiting to be served!`
  else return `Currently serving ${katzDeli.shift()}.`;
}
