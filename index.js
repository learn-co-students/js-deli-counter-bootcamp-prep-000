function takeANumber(line,name){
    line.push(name)
	var order={}
	for (var i=0;i<line.length;++i){
		order[line[i]]=i+1
    }
}
