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
console.log(langs[0]);
const person={
    firstname:"mohammed",
    id:1234,
    adrress: "Damascus, Syria",

}
console.log("اهلاً "+person.firstname);
const myname= "mohammed";
const website= "mohammed.com";
console.log(`my name is ${myname}
and my website is ${website}`);
window.addEventListener("resize", ()=>{
    console.log("window resized");
});
const  element = document.createElement("h6");
element.innerText = "hello world";
document.body.appendChild(element);
console.log(element);
console.log(document.getElementsByClassName("mywebsite"));
const instagram = document.getElementsByClassName("instagram");
instagram[0].style.fontStyle = "italic";
const searchbar = document.getElementById("search-bar");
searchbar.style.backgroundColor = "";
searchbar.style.color = "white";
searchbar.style.borderColor = "yellow";

console.log(document.querySelector("#btn"));
const button = document.querySelector("#btn");
button.addEventListener("click", ()=>{
    console.log("button clicked");
});
if (button.addEventListener>=15)
    console.log("button clicked more than 15 times");