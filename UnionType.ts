type alphaNumeric = number | string;


function getSum(a:alphaNumeric,b:alphaNumeric):any{
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    else if(typeof a === 'string' && typeof b === 'string'){
         return a.concat(" ",b);
    }
    else{
        return 'Parameters must be numbers or strings';
    }
};

console.log(getSum(10,20));
console.log(getSum('Hello','World'));
console.log(getSum(10,'World'));