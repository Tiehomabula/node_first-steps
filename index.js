//export import
//1.npm init es6 to upload your package.json files making it easier to link the 2 files.
//2.create an index.html file.
//3.export the greet function from greet.js
//4.import greet function in index.js

import{greet} from './greet.js';//put'./ bcz it can be found in another folder.
console.log(greet('Ntombi'));//if you dont want to put curly braces put default by export in greet file

import {yo} from './greet.js';
console.log(yo('Ntombi'));

import chalk from 'chalk';//1. npm install --save chalk import chalk module which can cover 
//2.import chalk from 'chalk' its in your package.json file.so iport chalk from chalk in

const styledMessage = chalk.bgRedBright.white(greet('Tieho'));
console.log(styledMessage) //ctrl+k+c to comment out , ctrl+k+u to remove comment

import cowsay from'cowsay'; // for cowsay module
console.log(chalk.bgMagentaBright.white(cowsay.say({
    text: greet('Ntombi')
})));

import figlet from 'figlet';//use this for figlet module
figlet('Hello, Ntombi!',function(err, data){
    if (err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
      console.log(data);
    }
)