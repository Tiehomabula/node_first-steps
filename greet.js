//console.log("Happy Monday, ");
let name='Tieho';
//console.log ('Happy Monday, '+name);


export function greet(name){
    return "Hello , "+name;
}
//console.log(greet('Ntombi'));//always do console.log to execute your function

export function yo(name){
    return "Yo, "+name;
}

import figlet from 'figlet';

import cowsay from 'cowsay';
const cowMessage=cowsay.say({
    text:'Hello World!'
})
console.log(cowMessage);