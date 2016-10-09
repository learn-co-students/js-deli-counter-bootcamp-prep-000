

function takeANumber(array,name){
  array.push(name);
  for(let i=0; i<array.length; i++){
    if (array[i]==name){
      return `Welcome, ${name}. You are number ${i +1} in line.`
    }
  }
}

function nowServing(array){
  if(array.length==0){
    return "There is nobody waiting to be served!"
  }
  else{
    var removed=array.shift()
  }
  return `Currently serving ${removed}.`
}

function currentLine(array){
  var tempArry=[];

  if (array.length==0){
    return "The line is currently empty."
  }
  else{
    for(let i=0; i<array.length; i++){
      tempArry.push(` ${i +1}. ${array[i]}`)
    }
  }
  return "The line is currently:" + tempArry ;
}
