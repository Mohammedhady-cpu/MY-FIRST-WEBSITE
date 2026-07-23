console.log("MY WEBSITE");
let n=3;
let a=8
let b=8;
let tital="go away";
console.log(n);
console.log(b)
console.log(n+b)
console.log(tital)
let c = undefined
console.log(c)
if (a<b)
    console.log(b+" bigger");
else if (a>b)
    console.log(a+" bigger");
else
    console.log("a=b");
    
function sum(a, b){
    return a+b
}
console.log(sum(1,2));
function der(){
    let bad = 1
    let zero =1
    function room(){
        let light = 1
        console.log(light,zero);
    }
    return room()
}
let firstroom = der 
der()
console.log(typeof n);
if(typeof n == "number")
    console.log("error");
else
    console.log("nice");
const d = false;
console.log(typeof (d+1));

const langs=["العربية","الأنجليزية","الأيطالية","الفرنسية"]
langs.push("اليابانية");
console.log(langs);
