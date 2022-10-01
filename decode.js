function decode(string){
	let result="";
	for(let i in string){
		result+=String.fromCodePoint(string.codePointAt(i)+10)
	}
	return result;
}

function encode(string){
	let result="";
	for(let i in string){
		result+=String.fromCodePoint(string.charCodeAt(i)-10)
		
	}
	return result
}

function powerEncode(string, count){
	let result=string
	for(let i=0;i<count;i++){
		result=encode(result)
	}
	return result
}

function powerDecode(string, count){
	let result=string
	for(let i=0;i<count;i++){
		result=decode(result)
	}
	return result
}