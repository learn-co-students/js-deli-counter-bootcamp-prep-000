var takeANumber = (arr,name) => `Welcome, ${name}. You are number ${arr.push(name)} in line.`;
var nowServing = (arr) => (arr.length>0)?`Currently serving ${arr.shift()}.`:`There is nobody waiting to be served!`;
function currentLine(arr){
  var str = `The line is currently empty.`;
  if (arr.length>0){
    str = `The line is currently: `
    for(var ind in arr){
      str+=`${parseInt(ind)+1}. ${arr[ind]}`;
      str+=(ind<arr.length-1)?', ':'';
    }
  }
  return str
}
