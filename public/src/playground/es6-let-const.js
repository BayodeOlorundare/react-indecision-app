//Const used for static variables
//Let for reassignments

let nameLet = 'Bayo';
nameLet = 'S';
console.log('nameLet', nameLet);

const nameConst = 'Dare';
console.log('nameConst', nameConst);

// Block scooping

const fullName = 'Bayode Olorundare';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);