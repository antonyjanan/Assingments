// const inputArray=["and","roger","man","develop",'adventure'];
// const test=inputArray.filter((item)=>item.length<5);
// console.log(test);
// if(test.length<5){
//     console.log(true);
//     }else{
//     console.log(false);
// }
const inputArray=["test","naming","johmson"];
const isShort=(item)=>item.length<5;
const test=inputArray.filter(isShort);
console.log(test);
if(test.length<5){
    console.log(true);
}else{
    console.log(false);
}