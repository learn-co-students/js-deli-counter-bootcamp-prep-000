function takeANumber(katzDeli, newcustomer){
  katzDeli.push(newcustomer);
  return(`Welcome, ${newcustomer}. You are number ${katzDeli.length} in line.`);
}
function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let x = deliLine.shift();
    return `Currently serving ${x}.`;
  }
}
function currentLine(y){
    let array = [];
    for (let x = 0; x < y.length; x++){
      if (x === y.length - 1){
      array.push(`${x+1}. ${y[x]}`)
      }else {
      array.push(`${x+1}. ${y[x]},`)
    }
    }
      if (array.length === 0){
        return "The line is currently empty.";
      }else{ 
        return "The line is currently: " + array.join(" ");
      }
}