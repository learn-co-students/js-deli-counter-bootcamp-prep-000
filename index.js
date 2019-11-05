function takeANumber(line,name){
  line.push(name);
  return(`Welcome, ${name}. You are number ${line.length} in line.`);
}

function nowServing(line){
  if ( 0 < line.length) {
    var name = line.shift();
    return(`Currently serving ${name}.`);
    
  }
  else 
    return 'There is nobody waiting to be served!';
}

function currentLine(line){
  var string = 'The line is currently:';
  if (0 < line.length){
   let i = 0;
   while (i < line.length){
     string = string + ` ${i+ 1}. ${line[i]}`;
    if (i < line.length - 1){string = string + ',' }
     i++;
   }
    return(string);
  }
  
  else {return "The line is currently empty.";}
}