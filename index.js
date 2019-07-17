function takeANumber(list,name){ 
    list.push(name) 
     return `Welcome, ${name}. You are number ${list.length } in line.`
   }
   
   function nowServing(list){ 
     if (list.length !=0) { 
      let customer =  list.shift() 
      let nowServing = `Currently serving ${customer}.` 
      return nowServing 
     }
     else {
       return "There is nobody waiting to be served!"
     }
   }
   
   function currentLine(list){ 
     let line = ''
     for(let i = 0; i < list.length;i++){ 
       line += ` ${i+1}. `  
       line += list[i]  
       if (list.length !=i+1){ 
            line+=',' 
       }
       
       
     }
     line = "The line is currently:"+ line
     
     
     if (list.length==0){
       return 'The line is currently empty.'
     
     }
     
     else {
       return line 
     }
     
     
     
   }