let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let b0 = document.getElementById("b0");
let bp = document.getElementById("bp");
let bc = document.getElementById("bc");
let bm = document.getElementById("bm");
let bs = document.getElementById("bs");
let bd = document.getElementById("bd");
let bt = document.getElementById("bt");
let be = document.getElementById("be");

let out = document.getElementById("out");

let arr=[];

bc.addEventListener("click", function(){
    arr=[];
    out.innerText = arr;
})

b1.addEventListener("click", function(){
    arr.push("1");
    out.innerText = arr.join("");
})
b2.addEventListener("click", function(){
    arr.push("2");
    out.innerText = arr.join("");
})
b3.addEventListener("click", function(){
    arr.push("3");
    out.innerText = arr.join("");
})
b4.addEventListener("click", function(){
    arr.push("4");
    out.innerText = arr.join("");
})
b5.addEventListener("click", function(){
    arr.push("5");
    out.innerText = arr.join("");
})
b6.addEventListener("click", function(){
    arr.push("6");
    out.innerText = arr.join("");
})
b7.addEventListener("click", function(){
    arr.push("7");
    out.innerText = arr.join("");
})
b8.addEventListener("click", function(){
    arr.push("8");
    out.innerText = arr.join("");
})
b9.addEventListener("click", function(){
    arr.push("9");
    out.innerText = arr.join("");
})
b0.addEventListener("click", function(){
    arr.push("0");
    out.innerText = arr.join("");
})
bp.addEventListener("click", function(){
    arr.push(".");
    out.innerText = arr.join("");
})
bs.addEventListener("click", function(){
    arr.push("+");
    out.innerText = arr.join("");
})
bm.addEventListener("click", function(){
    arr.push("-");
    out.innerText = arr.join("");
})
bd.addEventListener("click", function(){
    arr.push("/");
    out.innerText = arr.join("");
})
bt.addEventListener("click", function(){
    arr.push("*");
    out.innerText = arr.join("");
})
be.addEventListener("click", function(){
    
    out.innerText = eval(arr.join(""));
})