//so we have a language gussing package --> franc
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//the above lines of code imp for making require work for ES module.

import {franc, francAll} from 'franc'
const langs = require('langs');
const colors = require('colors');

//console.log(franc('Alle menslike wesens word vry'))
const text = process.argv[2];  //take the input from CLI.
const langCode = franc(text);
if(langCode == 'und') {
    console.log("sorry ! Couldn't figured out the langage".red);
}else {
    console.log("Language code is:", langCode);
    const language = langs.where("3", langCode); //here 3 is the langugage code i.e langCode is 3 letter.
    if(language == undefined) {
        console.log("Try with a different sentence !!".red);
    }else {
        console.log("Language object is:", language);
        console.log(language.name.blue);  //using color package also.

    }
}
