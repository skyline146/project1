"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log(this.colors.border + this.colors.bg);
    }
};

options.makeTest();

const {border, bg} = options.colors;

// console.log(Object.keys(options).length);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) == 'object') {
//         for (let index in options[key]) {
//             console.log(`Свойство ${index} имеет значение ${options[key][index]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);