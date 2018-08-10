var takeANumber = (line, name) =>{
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length } in line.`
};

var nowServing = (line) =>{
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var serving = line[0]
    line.shift()
    return `Currently serving ${serving}.`
  }
};

var currentLine = (line)=>{
  if(line.length === 0){
    return "The line is currently empty."
  }else{
    var online = "The line is currently: "
    for(let i = 0; i < line.length; i++){
      online += `${i+1}. ${line[i]}`
      if(i != line.length-1){
        online+=", "
      }
    }
    return online
  }
}