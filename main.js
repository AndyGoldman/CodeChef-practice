var balance = 302.89;
var withdrawal = parseFloat(prompt("How much would you like to withdraw?"));

ATM();	

function ATM(withdrawal, balance) {
	if (withdrawal % 5 !== 0) {
		console.log(balance);
	} else if (withdrawal >= (balance + 0.50)) {
		console.log(balance);
	} else {
		balance -= (withdrawal + 0.50);
		console.log(balance);
	}
}