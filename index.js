function takeANumber(num,name){
  if (num[0] !== "")
    num.push(name)
  return `Welcome, ${name}. You are number ${num.length} in line.`
}

function nowServing(katzDeliLine) {
  var firstperson =''
  
  if (!katzDeliLine[0]){
    return "There is nobody waiting to be served!";
  } else {
    firstperson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstperson}.`;
  }
}

function currentLine(katzDeliLine){
  var str = "The line is currently: ";
  if (!katzDeliLine[0]){
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++){
      str += `${i+1}. ${katzDeliLine[i]}${i===katzDeliLine.length-1 ? "" : ", "}`;
    }
    return str ;
  }
 
}