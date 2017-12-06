var katzDeliLIne = [];
function takeANumber(katzDeliLIne, newCustomer){
  katzDeliLIne.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLIne.length} in line.`;
}

function nowServing(katzDeliLIne) {
  if(katzDeliLIne.length === 0){
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${katzDeliLIne.shift()}.`;
}

function currentLine(katzDeliLIne) {
  if(katzDeliLIne.length ===0){
    return 'The line is currently empty.';
  }
  var result='The line is currently: ';
  for(var i=0;i<katzDeliLIne.length;i++){
    result=result+`${i+1}. ${katzDeliLIne[i]}, `;
  }

  return result.substring(0, result.length-2);
}
