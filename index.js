var katzdeli = []

function takeANumber(katzdeli,newname) {
  katzdeli[katzdeli.length]=newname;
  return `Welcome, ${newname}. You are number ${katzdeli.length} in line.`;
}

function nowServing(katzdeli) {
  if (katzdeli[0] == null) {
    var nowserving = "There is nobody waiting to be served!"
    return nowserving;
  }else {
 return (`Currently serving ${katzdeli.shift()}.`)

    //var nowserving = katzdeli[0];
  //katzdeli.shift;
  //console.log(`Currently serving ${nowserving}.`);
  //return `Currently serving ${nowserving}.`;
}

}

function currentLine(katzDeliLine) {
  if (katzDeliLine[0] == null) {
    return "The line is currently empty."
} else {
var LineArrayInSentences = [];
for (var i=0; i<katzDeliLine.length;i++){
  LineArrayInSentences[i] = ` ${i+1}. ${katzDeliLine[i]}`
}
return `The line is currently:${LineArrayInSentences}`
}
}
