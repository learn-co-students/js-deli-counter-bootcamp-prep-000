var katzDeliLine = [];

function takeANumber(line,name){
  line.push(name);
  var number = line.length;
  var string = `Welcome, ${name}. You are number ${number} in line.`;
  return string;
}

function nowServing(line){
  if(line.length>0){
    var string = `Currently serving ${line[0]}.`
    line.shift();
  }else{
    var string = `There is nobody waiting to be served!`;
  }
  return string;

}

function currentLine(line){
  if(line.length>0){
    var string="The line is currently: ";
    for(let i=0;i<line.length;i++){
      string+=`${i+1}. ${line[i]}`;
      if(i!=line.length-1){
        string+=`, `;
      }
    }
  }else{
    var string="The line is currently empty.";
  }
  return string;
}
