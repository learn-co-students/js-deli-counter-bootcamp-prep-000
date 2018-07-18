function takeANumber(katzDeliLine, name){
  var katzDeli = [];
  for (let i = 1; i <= katzDeliLine; i++){
    katzDeli.push(`Welcome, ${name[i]}.  You are number ${katzDeliLine[i]} in line`);
  }
  return katzDeli;
}
  