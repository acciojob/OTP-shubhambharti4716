//your JS code here. If required.
let inputElements = document.getElementsByClassName("code");
console.log(inputElements.length)
for(let i=0; i< inputElements.length; i++){
	inputElements[i].addEventListener("keyup", (event)=>{
		let currentElement = event.target ;
		let code = event.key.charCodeAt(0);
		console.log(event.key)
		if(event.key === "Backspace"){
			let prevElement = currentElement.previousElementSibling ;
			if(prevElement){
				prevElement.focus();
			}
			return ;
		}



		if(code>=48 && code<=57){
			let nextElement = currentElement.nextElementSibling ;
			if(nextElement){
				nextElement.focus() ;
			}

		}else{
			event.target.value="" ;
		}
	})

}