function takeANumber(array, name){
  var arrayLength = array.length;
  array.push(name);
  return 'Welcome, ' + name + '. You are number ' + (arrayLength+1) + ' in line.';
}
function nowServing(array){
  if(array.length > 0){
    var name = array[0];
    array.shift();
    return 'Currently serving '+ name+'.';
  }
  else{
    return 'There is nobody waiting to be served!';
  }
  
}
function currentLine(array){
  if(array.length > 0){
    var name = '';
    for(var i=0; i<array.length; i++){
      if(i>1){
        name+=(i+1)+'. '+array[i];
      }
      else{
        name+=(i+1)+'. '+array[i]+ ', ';
      }
    }
    return 'The line is currently: '+name;
  }
  else{
    return 'The line is currently empty.';
  }
  
}