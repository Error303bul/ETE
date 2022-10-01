const textarea=document.getElementById("textarea")
const output=document.getElementById("output")
const switcher=document.getElementById("checkbox")
const checkbox=document.getElementById("checkboxvalue")
const files=document.getElementById("file")
const reader = new FileReader();

const tick=setInterval(update, 20)

function update(){
	if(switcher.checked){
		checkbox.innerHTML="Decode"
		try{
			let value=powerDecode(textarea.value,3)
			if(output.innerHTML!=value){
				output.innerHTML=value
			}
		}catch(e){
			output.innerHTML="Cannot be decoded"
		}
	}else{
		checkbox.innerHTML="Encode"
		try{
		let value=powerEncode(textarea.value,3)
			if(output.innerHTML!=value){
				output.innerHTML=value
			}
		}catch(e){
			output.innerHTML="Cannot be encoded"
		}
	}
}

if (navigator.clipboard) {

  console.log('Clipboard API available');

}

reader.onload=async function(){
	textarea.value=reader.result
	files.value=""
}

files.onchange=function(){
	reader.readAsText(files.files[0]);
}

copytext.onclick=async function(){
	if(output.innerHTML.length>0){
		await navigator.clipboard.writeText(output.innerHTML);
	}
}

document.getElementById("clear").onclick=function(){
	textarea.value=""
}