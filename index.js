var katzDeliLine = [];

var takeANumber = (arr,name) =>{
  let pos = arr.length+1
  arr.push(name)
  return `Welcome, ${name}. You are number ${pos} in line.`
}

var nowServing = arr =>{
  let name = arr.shift()
  if(arr.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    
    return `Currently serving ${name}.`
  }

}

var currentLine = arr =>{
  let j;
  let myString = "The line is currently: ";
  if(arr.length ===0){
    return "The line is currently empty."
  }else{
    for(let i =0; i<arr.length;i++){
    j = i+1
    if(i === 2){
      myString+= `${j}. ${arr[i]}`
    }else{
      myString+= `${j}. ${arr[i]}, `
    }
  }
  
  return myString;
  }
  
}



