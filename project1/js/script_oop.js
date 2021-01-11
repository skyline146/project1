"use strict";

// let str = 'test';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 100,
    armor: 100
};

const john = {
    health: 50
};

Object.setPrototypeOf(john, soldier);

const alex = Object.create(soldier);
