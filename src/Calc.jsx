import React from 'react';

function add(a,b){
    let sum = a+b;
    return sum;
}

function subtract(a,b){
    let sub = a-b;
    return sub;
}

function multiply(a,b){
    let mul = a*b;
    return mul;
}

function divide(a,b){
    let divide = a/b;
    divide = divide.toFixed(2);
    return divide;
}

export  {add , subtract, multiply, divide};
