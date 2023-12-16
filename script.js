function generateValidCharCode() {
	let num = parseInt(Math.random() * 100);
	if ((48<=num && num<=57) || (65<=num && num<=90) || (97<=num && num<=99)) {
		return num;
	}
	else {
		return 100 + parseInt(num/5);	
	}
}

function makeid(l) {
  // write your code here
	let str="";
	for(let i=0; i<l; i++) {
		let x= generateValidCharCode();
		let charCode = x;
		str+= string.fromCharCode(charCode);
	}
	return str;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
