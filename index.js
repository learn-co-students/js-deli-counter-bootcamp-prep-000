var katzDeli=[];
function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}
function nowServing(currentLine){
  if (currentLine.length===0){
    return 'There is nobody waiting to be served!'
  } else {
    var name=currentLine.shift();
    return `Currently serving ${name}.`
  }
}
function currentLine(currLine){
  if(currLine.length===0){
    return 'The line is currently empty.'
  }else {
    var announcement='The line is currently: ';
    for(var i=0; i<currLine.length-1; i++){
      announcement=`${announcement}${i+1}. ${currLine[i]}, `
    }
    var leng=currLine.length;
    announcement=`${announcement}${leng}. ${currLine[leng-1]}`;
    return announcement;
  }
}
