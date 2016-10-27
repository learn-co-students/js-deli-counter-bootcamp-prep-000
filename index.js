var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {

  for(let i = 0; i >= katzDeli.length; i++){
     if (i < 1) {
      return `There is nobody waiting to be served!`;
     }
     else {
       return `Currently serving ${katzDeli[i]}`
     }
   }
}
