var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var indexNum = katzDeliLine.length;
  indexNum++;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${indexNum} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var servingPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${servingPerson}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var arr = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var curName = ` ${i+1}. ${katzDeliLine[i]}`;
      arr.push(curName);
    }
    return `The line is currently:${arr}`;
  }else{
    return "The line is currently empty.";
  }
}

takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");
console.log(currentLine(katzDeli));
