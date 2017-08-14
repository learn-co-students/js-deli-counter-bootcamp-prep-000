var katzdeli = []

function takeANumber(katzdeli,newname) {
  katzdeli[katzdeli.length]=newname;
  return `Welcome ${newname}, you are ${katzdeli.length} in line`;
}

function nowserving() {
  if katzdeli[0] === null {
    var nowserving = "There is nobody waiting to be served!"
  }else {var nowserving = katzdeli[0];
  katzdeli.unshift;}
  return nowserving;

}

function currentLine(katzDeli) {
  if katzdeli[0] === null {
    return "The line is currently empty."
} else {
var LineArrayInSentences = [];
for (var i=0; i<katzdeli.length;i++){
  LineArrayInSentences[0] = '${i}. ${katzdeli[i]}'
}
return `The line is currently: ${LineArrayInSentences}``
}
}
