let m1 = 78;
let m2 = 92;
let m3 = 34;
let m4 = 66;
let m5 = 81;

const total = (m1+m2+m3+m4+m5) / 5;


console.log(total)
if(total < 35){
    console.log(`Grade : F ${total}`)
}else if(total > 35){
    console.log(`Grade : E ${total}`)
}else if(total > 50){
    console.log(`Grade : D ${total}`)
}else if(total >60){
    console.log(`Grade : C ${total}`)
}else if(total > 70){
    console.log(`Grade : B ${total}`)
}else if(total > 80){
    console.log(`Grade : A ${total}`)
}else if(total > 90){
    console.log(`Grade : ${total}`)
}else{
    console.log("There is some error")
}

