

function takeANumber(arr,name){
  var place= 0
  arr.push(name);
  place=arr.indexOf(name)+1;
  return "Welcome, "+name+". You are number "+place+ " in line."
}

function nowServing(arr){
  if (arr.length===0){
    return "There is nobody waiting to be served!"
  } else {
    var next = arr.shift()
    return "Currently serving "+next+"."
  }
}

function currentLine(arr){
  var num = 0
  if (arr.length===0){
    return "The line is currently empty."
  } else {
    var cust = ''
    for (var i=0;i<arr.length;i++){
      if (i===arr.length-1){
        cust+=(i+1).toString()+". "+arr[i]
      } else {
        cust+=(i+1).toString()+". "+arr[i]+", "
      }
    }
    return "The line is currently: "+cust;
  }
}
