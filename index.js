function takeANumber (arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr) {
  if(arr.length >= 1) {
    return `Currently serving ${arr.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(arr) {
  var line = `The line is currently` 
  if(arr.length >=1){
    line += `:`;
  for(var i = 0; i < arr.length; i++) {
    line += ` ${i+1}. ${arr[i]},`;
  }
  return line.substring(0,line.length-1);
  } else {
    return line +` empty.`
  }
}