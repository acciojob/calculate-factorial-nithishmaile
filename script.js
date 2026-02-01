//your JS code here. If required.
let userInput=parseInt(prompt("Enter the number:"));

function fact(n){
	if(n==1){
		return 1
	}
	return n*fact(n-1)
}


console.log(alert(`The factorial of ${userInput} is ${fact(userInput)}.`))


