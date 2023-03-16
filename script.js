//your JS code here. If required.
let output=document.getElementById('output')

function updateText() {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve("Hello, world!")
		},1000)
	})
}

updateText().then((res) => output.innerText=res)