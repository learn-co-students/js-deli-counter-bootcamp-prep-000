var katzDeliLine=[];
function takeANumber(katzDeliLine, name) {
  for (let i=0, 1=line.length;i<1;i++) {
    katzDeliLine.push(`${i + 1}. ${line[i]}`)
  }
  return "The line is: "${katzDeliLine.join(", ")}""
}
function nowServing(katzDeliLine) {
  if(katzDeliLine===0) {
    return "There is nobody waiting to be served!"
  } else{
  console.log("Now serving: ${katzDeliLine[0]}")
}
}
