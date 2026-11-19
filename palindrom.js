

function CountNumber(num){

    num = Math.abs(num).toString().length;

    console.log(num);
}

console.log(' Count a digit');
CountNumber(12094);



console.log(`Sum of its digits`);

let number = 4825;
let text = number.toString();

let count = text.length;
let sum = 0;


for(let digit of text){
    sum =sum + Number(digit);

}
console.log('Count ',count);
console.log('sum ',sum);













console.log('To check the number is Palindrom');


let palindromNum = 12211;

let string = palindromNum.toString();

let reverse = string.split('').reverse().join('');

if(string === reverse ){
    console.log("it is a palindrome");
}else{
    console.log("not a palindrome");
}


