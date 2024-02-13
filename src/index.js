'use strict';

function getTheNumber (theNumber, decision = '', startNumber = 1) {
    
    if (theNumber <= 0 || typeof theNumber !== 'number') {
        return `Invalid input information.`;
    }; 

    if (startNumber === theNumber) {
        return `'${theNumber}' = ${decision}`;
    };
    
    if (startNumber < theNumber) {
        const variant1 = getTheNumber(theNumber, `(${decision}${startNumber} + 5)`, startNumber + 5);
        const variant2 = getTheNumber(theNumber, `(${decision}${startNumber} * 3)`, startNumber * 3);    
        return variant1 || variant2;
    };

    return null;
};

console.log(getTheNumber(13));
