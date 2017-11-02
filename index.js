var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){

    katzDeli = katzDeliLine
    katzDeli[katzDeliLine.length] = newPerson

  return `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length>0){
    return `Currently serving ${deliLine.shift()}.`
  }
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line){
  var number = [];
  var person = [];
  var array = [];
  var arrayLine = [`The line is currently: `];

  if (line.length>0){
    for(var i=0;i<line.length-1;i++){
        number[i] = i+1;
        person[i]=line[i];
        array [i] = `${number[i]}. ${person[i]}, `
    }
    for(var i=line.length-1;i<line.length;i++){
        number[i] = i+1;
        person[i]=line[i];
        array [i] = `${number[i]}. ${person[i]}`
    }
    for(var i=0;i<line.length;i++){
        arrayLine[0]= arrayLine[0]+array[i]
    }
    return `${arrayLine}`
  }
  else{
    return `The line is currently empty.`
  }
}
