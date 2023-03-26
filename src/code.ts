//adding of two numbe
type combine = number | string;  

function Add(num1: combine, num2: number | string, text: string): void {
    let first;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        first = +num1 + +num2;
        
    } else {
        first = num1.toString() + num2.toString()
        
    }

    return;
}

const combineAdd1 = Add(20, 30, 'max');
console.log(combineAdd1);

const combineAdd2 = Add('20', '30', 'min');
console.log(combineAdd2);