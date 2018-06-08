var katzDeli = [];
function takeANumber(katzDeli,customer){
  katzDeli.push(customer);
  var num=katzDeli.indexOf(customer)+1;
  return 'Welcome, '+customer+'. You are number '+num+' in line.'
}
function nowServing(katzDeli){
  if (katzDeli.length>0){
    var now=katzDeli[0]
    katzDeli.shift()
    return 'Currently serving '+now+'.'
  } else{
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(katzDeli){
  var em=[];
  if (katzDeli.length>0){
    for (var i=0;i<katzDeli.length;i++){
     em.push(''+(i+1)+'. '+katzDeli[i])
    }
   return "The line is currently: "+em.join(', ')
  }else{
    return "The line is currently empty."
  }
  
}