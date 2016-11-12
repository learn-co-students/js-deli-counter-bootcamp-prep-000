var katzDeliLine = [];

var takeANumber = (katzDeliLine,personName)=>{
  //var katzDeliLine = [];
  katzDeliLine.push(personName);
  //return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line`;
  return "Welcome, "+personName+". "+"You are number "+katzDeliLine.length+" in line."
}

var nowServing = (katzDeliLine)=>{
  if (katzDeliLine.length>0){
    return "Currently serving " +katzDeliLine.shift()+".";
  }else {
      return `There is nobody waiting to be served!`;
  }
  //return katzDeliLine=katzDeliLine.shift();
}

var currentLine = (line)=>{
  var a = "The line is currently: "
  var arr = [];
  var n;
  if(line.length>0){
  for(var i=0;i<line.length;i++){
    arr.push((i+1)+". "+line[i]);
  }
  //arr.push((i+1)+"."+line[i])
  return "The line is currently: "+arr.join(', ');
  }else {
    return "The line is currently empty."
  }


}
