//es5 function

const square = function (x) {
    return x * x;
};

console.log(square(8))

//es6 function

//const squareArrow = (x) => {
    //return x * x
//}

const squareArrow = (x) => x * x;

console.log(squareArrow(4))

const fullName = 'Bayo Olorundare';
//const getfirstName = (fullName) => {
    //return fullName.split(' ')[0];
//}

const getfirstName = (fullName) => fullName.split(' ')[0];

console.log(getfirstName('AJ Dare'));