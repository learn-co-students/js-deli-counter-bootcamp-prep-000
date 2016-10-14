function takeANumber(line,name){
  line.push(name)
  return 'Welcome, '+name+'. You are number '+line.length+' in line.'
}
function nowServing(line,name){
  if(line.length==0)return 'There is nobody waiting to be served!'
  else return 'Currently serving '+line.shift()+'.'
}
function currentLine(line){
  if(line.length==0)return 'The line is currently empty.'
  else {var str='The line is currently:'
     var i=0
     for(;i<line.length;i++){
       if(i>0)str+=','
       str+=' '+(i+1)+'. '+line[i]
     }
     return str
  }
}
