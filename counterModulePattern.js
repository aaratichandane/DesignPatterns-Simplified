//Encapsulate functionality using IIFEs or CommonJS/ESM

let count = 0;

function increment(){
    count++;
}

function getCount(){
    return count;
}

module.exports = {
    increment,
    getCount
}