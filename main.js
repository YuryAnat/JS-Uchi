// console.log(111);
// alert('alert');

var a = 1; //устаревший
let b = 2; //современный
const con = 0; //константа

console.log(con);

console.log(temp);
var temp = 't';

let tempL = 'l';
console.log(tempL);

let i = Infinity;
console.log(i);

console.log(2.33 / 10);

console.log('2k' / 2);

console.log(99999999999999999n + 1n);

// task 2

let fistStr = 'one';
let str2 = "two";
let str3 = `three ${fistStr}`

console.log(fistStr);
console.log(str2);
console.log(str3);

let check = true;
let unCheck = false;

console.log(str2 == str3);

console.log(typeof str2);
console.log(typeof i);
console.log(typeof null);

document.getElementById("indexText").innerText = "Выведено с JS";

// task 3

document.getElementById("indexInner").innerHTML = '<p>Выведено p JS<\p>';
document.getElementById("indexText").innerText = "Выведено с JS";

document.querySelector('#indexInner').innerHTML = '';
document.querySelector('.p1').innerHTML = '9999999999999999999999999999';

console.log(document.querySelectorAll('.p1'));

let input = document.querySelector('.text');
let button = document.querySelector('.click');
let divIn = document.querySelector('.divInput');
button.onclick = function() {
    console.log(input.value);
    console.log(typeof input.value);
    divIn.innerHTML = `<h1>${input.value}</h1>`;
    input.value = '';
}

let pval = prompt('Who?');
if(pval != '') {
    input.value = pval
} else {
    input.value = 'nobody'
}


