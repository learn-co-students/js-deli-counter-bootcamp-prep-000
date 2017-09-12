function takeANumber(array, name){
  if (array.length === 0){
    array.push(name);
  }
  else{
    array.push(name);
  }
  return "Welcome, " + name + ". You are number " + (array.length) + " in line.";
}

function nowServing(array){
  var customer;
  if (array.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    customer = "Currently serving " + array[0] + ".";
    array = array.shift();
    return customer;
  }
}

function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty.";
  }
  else{
    var newArr = [];
    var string;
    newArr.push("The line is currently:");
    for(var i = 0; i < array.length; i++){
      newArr.push(i+1 + ".");
      if (i != (array.length -1)){
      newArr.push(array[i] + ",");
    }
    else{
      newArr.push(array[i]);
    }
    }
    newArr.toString();
    string = newArr.join(' ');
    return string;
  }
}
