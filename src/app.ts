function add(s1: number, s2: number, s3: number, amt: number, showResult: boolean, phrase: string) {
    // calculate student who got paid 
    const studentGotPaid = s1 * amt;
    const resultGotPaid = studentGotPaid;
    
    // calculate student who are yet to pay 
    const totalStudent = s3 * amt;
    const resultYetPaid = totalStudent; 
    const remain = resultYetPaid - resultGotPaid; 

    if (typeof showResult.valueOf() == 'boolean'  || s2 === remain) {
        console.log(phrase.toUpperCase() + remain.toFixed(2));

    } else {
        return remain.toFixed(4);
    }

    remain == s2;
    
}

let number1: number;
number1 = 5;
const number2: number = 3* 30000
, number3: number = 8
, amount: number = 30000
, printResult = true
, notPaid = 'salary remain: ';

add(number1, number2, number3, amount, printResult, notPaid)
