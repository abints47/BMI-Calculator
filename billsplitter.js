
console.log("Price $1000");


let price = 1200;
let gst = price * 0.05;
let tip = price * 0.10;


let total = price + gst + tip
console.log(total);


function BillSplitter(n, total){
    let count = n;
    let price = total;

    let split = price / count;

    console.log(`if there are ${n} peoples the splitt amount will be ${split}`);

}

BillSplitter(4, total);





